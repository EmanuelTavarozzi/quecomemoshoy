import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTimesCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import sessionManager from '../services/sessionManager'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios';
const imageDefault = require("../img/recetas/polloalacrema.jpg");

export default withRouter(class Profile extends React.Component{
    constructor(){
        super()
        this.sessionManager = new sessionManager();
        this.state = {
            username: this.sessionManager.getUserName(),
            myRecipes: [],
            myFavoriteRecipes: []
        }
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this)
        this.handleGoToRecipe = this.handleGoToRecipe.bind(this)

    }

    handleDeleteRecipe(recipeId) {
        axios.post("http://localhost:5000/recipes/deleteRecipeById",{ id: recipeId})
            .then((res)=> {
                this.props.history.push('/profile')
            })
    }

    handleGoToRecipe(recipeId) {
        this.props.history.push(`/recipe/${recipeId}`)
    }

    componentDidMount() {
        this.sessionManager.getUserData().then((user)=> {
            if (user.favoriteRecipes.length) {
                axios.post("http://localhost:5000/recipes/getRecipesByIds", { ids: user.favoriteRecipes})
                .then((res) => {
                    this.setState({
                        myFavoriteRecipes: res.data
                    })
                })
            }
            axios.post("http://localhost:5000/recipes/getRecipesByUserMail", { usermail: user.mail})
            .then((res) => {
                this.setState({
                    myRecipes: res.data
                })
            })
        } 
        ) 
    }

    render(){
        return(
            <React.Fragment>
                <div className="banner" data-aos="fade-right">
                    <Row style={{position: "relative"}}>
                        <div className="user-img">
                            <FontAwesomeIcon color="#3EC5BD" icon={faUserCircle} size="7x"/>
                        </div>
                        <Col xs="12" style={{backgroundColor: "white", borderRadius: "2rem", padding: "2rem", paddingLeft: "5rem"}}>
                            <h1 style={{color: "black", marginBottom: "0"}}>Mi perfil: 
                            <span style={{color: "#3EC5BD"}}> {this.state.username}</span>
                            </h1>
                        </Col> 
                    </Row>
                </div>
                <Container style={{textAlign: "center"}}>
                    <h1 style={{textAlign:"center",margin:"4rem 0 2rem 0",fontSize:"4rem"}}>Mis recetas</h1>
                    { this.state.myRecipes.length ?
                         <React.Fragment>
                        { this.state.myRecipes.map((recipe, index) => 
                            <Container style={{textAlign: "left"}} key={index} className="contenedorRecetaPerfil" width="80%" data-aos="fade-down" data-aos-once={true}>  
                                <h3>{recipe.name}</h3>
                                <FontAwesomeIcon className="icono" color="red" onClick={() => this.handleDeleteRecipe(recipe._id)} icon={faTimesCircle} size="2x"/>
                                <FontAwesomeIcon className="icono" color="#3EC5BD" onClick={() => this.handleGoToRecipe(recipe._id)} icon={faClipboardList} size="2x"/>
                            </Container>
                        )}
                        </React.Fragment>
                    :
                        <React.Fragment>
                        <h4 style={{marginBottom: "1rem"}}>No creaste recetas aún</h4>
                        <Link to="/createRecipe">
                            <Button style={{fontSize: "2rem", backgroundColor:"#3EC5BD",border:"#4CC4BD"}}>Crear receta</Button>
                        </Link>
                        </React.Fragment>
                    }
                </Container>
                <Container style={{textAlign: "center", marginBottom: "4rem"}}>
                    <h1 style={{textAlign:"center",margin:"4rem 0 2rem 0",fontSize:"4rem"}}>Recetas Favoritas</h1>
                    { this.state.myFavoriteRecipes.length ?
                        <React.Fragment>
                           { this.state.myFavoriteRecipes.map((recipe, index) => 
                                <Container key={index} className="contenedorRecetaFavoritaPerfil" onClick={() => this.handleGoToRecipe(recipe._id)}>
                                    <div style={{borderRadius:"1rem", height: "150px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url("${recipe.imageurl || imageDefault}")`}}></div>
                                    {/* <img style={{borderRadius:"1rem"}}alt="Foto de la receta" src={recipe.imageurl || imageDefault}></img> */}
                                    <h3>{recipe.name}</h3>
                                </Container>
                           )} 
                        </React.Fragment>
                    :
                    <React.Fragment>
                        <h4 style={{marginBottom: "1rem"}}>No tenés recetas favoritas aún</h4>
                        <Link to="/recipes">
                            <Button style={{fontSize: "2rem", backgroundColor:"#3EC5BD",border:"#4CC4BD"}}>Buscar recetas</Button>
                        </Link>
                        </React.Fragment>
                    }
                </Container>

            </React.Fragment>
        )
    }
})