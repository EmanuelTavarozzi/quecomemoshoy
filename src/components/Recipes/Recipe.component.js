import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../Footer.component'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import sessionManager from '../../services/sessionManager'
const imageDefault = require("../../img/recetas/polloalacrema.jpg");

export default class Recipe extends React.Component {
    constructor() {
        super()

        this.state = {
            recipe: {},
            checkFavorite: ''
        }
        this.sessionManager = new sessionManager()
        this.handleFavorite = this.handleFavorite.bind(this)
        this.checkFavorite = this.checkFavorite.bind(this)
    }

    checkFavorite(id){      
            return  this.sessionManager.getUserData().then((user)=> user.favoriteRecipes.includes(id))      
    }

    callAPI() {
        const { match: { params } } = this.props;
        console.log(params)
        axios.get(`http://localhost:5000/recipes/${params.id}`)

            .then(res => {
                console.log(res);
                if (this.sessionManager.isLogged()) {
                this.checkFavorite(res.data._id).then((checkFavorite)=> {
                    console.log(checkFavorite)
                    this.setState({ recipe: res.data, checkFavorite })
                })
            }
            else{
                this.setState({ recipe: res.data, checkFavorite:false })
            }                               
                // verificar catcheo de error
            });
    }

    componentDidMount() {
        this.callAPI();
    }

    handleFavorite() {       
        axios.post('http://localhost:5000/recipes/likeRecipe',{
            _id: this.state.recipe._id 
        }
        ).then(() => {
            axios.post('http://localhost:5000/users/addFavoriteRecipe',{
                mail: this.sessionManager.getUserMail(),
                recipeid: this.state.recipe._id
            }).then(()=> {
                alert("Receta agregada a favoritos con exito")
                this.setState({
                    checkFavorite:true
                })
            })
                
        })       
    }


    render() {
        const pasos = [
            'Primer paso',
            'Segundo paso',
            'Tercer paso',
            'Cuarto paso',
            'Quinto paso',
            'Sexto paso',
            'Septimo paso',
            'Octavo paso',
            'Noveno paso',
            'Decimo paso',
        ]

        return (
            <div>
                <Container style={{backgroundImage: `url(${this.state.recipe.imageurl || imageDefault})`}} className="contenedorRecetaParticular" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                    <Row>
                        <Col>
                            <h3 style={{ fontSize: "4rem", marginBottom: "4rem", textTransform: "uppercase", color: "white" }}>{this.state.recipe.name}</h3>
                        </Col>
                    </Row>
                    <Row style={{ borderRadius: "1rem", border: "5px solid grey ", alignItems: "center", padding: "2rem" }} className="contenedorIngredientes" >
                        <Col xs="12">
                            <p>{this.state.recipe.description}</p>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ textAlign: "center", backgroundColor: "#00AAC1", marginTop: "2rem", marginBottom: "2rem", padding: "1rem", borderRadius: "2rem", color: "white" }} data-aos="zoom-out">
                    <Row style={{ justifyContent: "center", backgroundColor: "00AAC1" }}>
                        <p style={{ fontSize: "2rem" }}>Lista de ingredientes</p>
                    </Row>
                    <Row style={{ fontSize: "1.2rem", textTransform: "uppercase" }}>
                        {
                            this.state.recipe.ingredients &&
                            this.state.recipe.ingredients.map((ing, index) =>
                                <Col key={index}><p>{ing}</p></Col>
                            )
                        }
                    </Row>
                </Container>
                {
                    this.state.recipe.recomendations &&
                    <Container style={{ textAlign: "center", backgroundColor: "#3EC5BD", marginTop: "2rem", marginBottom: "2rem", padding: "1rem", borderRadius: "2rem", color: "white" }} data-aos="zoom-out">
                        <Row style={{ justifyContent: "center" }}>
                            <p style={{ fontSize: "2rem" }}>Recomendaciones</p>
                        </Row>
                        <Row style={{ fontSize: "1.2rem", padding: "1rem" }}>
                            {this.state.recipe.recomendations}
                        </Row>
                    </Container>
                }
                <h1 style={{ textAlign: "center" }}>A cocinar!</h1>

                {/*} Pasos para hacer la receta {*/}

                {this.state.recipe.steps && 

                    <Container fluid={true} className="pasosReceta">

                        {this.state.recipe.steps.map((step, index) =>

                            <Row key={index} style={{ alignItems: "center", margin: "2rem 0 2rem 0" }} data-aos="fade-right">
                                <Col lg="8" xs="12">
                                    <h2 style={{ textAlign: "center" }}>{pasos[index]}</h2>
                                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                        <p>
                                            {step}
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4" xs="12">
                                    <img className="picture-box" alt="Foto de la receta" src={require("../../img/recetas/polloalacrema.jpg")}></img>
                                </Col>
                            </Row>
                        )}

                        <h1 style={{ textAlign: "center" }}>A disfrutar!</h1>
                        <Row style={{ justifyContent: "center", marginBottom: "2rem", padding: "1rem" }} data-aos="zoom-out">
                            <img style={{ textAlign: "center" }} alt="recetaFinal" className="picture-box" 
                            src={this.state.recipe.imageurl || imageDefault}></img>
                        </Row>
                    </Container>
                }
                { this.sessionManager.isLogged() &&  !this.state.checkFavorite &&           

                <Row style={{ margin: "0rem 1rem 2rem 1rem" }} data-aos="fade-right">

                    <button onClick={this.handleFavorite} className="btn-fav">agregar a recetas favorita <FontAwesomeIcon style={{ color: "white" }} className="iconos" icon={faHeart} size="1x" /></button>

                </Row>
                }
                <Footer />
            </div>
        )
    }
}

