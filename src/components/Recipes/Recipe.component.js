import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
//import axios from 'axios'
import Footer from '../Footer.component'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class RecipesCard extends React.Component{
    constructor(){
        super()
        this.state = {
            titulo: "Ensalada de atún con magia",
            descrip: "Etiam porttitor tortor id nisi consequat, vitae sodales sapien commodo. Donec non neque nunc. Praesent fringilla ex orci, et volutpat sapien ultrices eget. Praesent tincidunt mi ligula, nec ullamcorper libero fermentum non. Integer laoreet luctus finibus. Aenean euismod, massa non tincidunt tincidunt, sapien nulla viverra mauris, quis dignissim mi purus ac ipsum. Quisque scelerisque luctus lorem eget congue.",
            ingredientes:['lechuga','tomate','arroz','carne picada'],
            recomendaciones: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed neque at metus posuere faucibus. Curabitur sed est lacus. Mauris mattis pulvinar mi. Nullam ipsum est, d, massa non tincidunt tincidunt, sapien nulla viverra mauris, quis dignissim mi purus ac ipsum. Quisque scelerisque luctus lorem eget congue.",
        }
        this.handleFavorite = this.handleFavorite.bind(this)
    }

    /*callAPI() {
        axios.get("http://localhost:5000/recipes/landingRecipes", { })
        .then(res => {
            console.log(res);
            this.setState({ recipes: res.data })
        });
    }
    */
    
    /*componentDidMount() {
        this.callAPI();
    }
    */

    handleFavorite(){
        alert("Agregado a receta favorita")
    }
    render(){
        const ingredientes = this.state.ingredientes.map((ing) =>
            <Col><p>{ing}</p></Col>
        )
        
        
        return(
            <div>
               <Container className="contenedorRecetaParticular" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row>
                        <Col>
                            <h3 style={{fontSize:"4rem",marginBottom:"4rem",textTransform:"uppercase",color:"white"}}>{this.state.titulo}</h3>
                        </Col>
                    </Row>
                    <Row style={{borderRadius:"1rem",border:"5px solid grey ",alignItems:"center",padding:"2rem"}}className="contenedorIngredientes" >
                        <Col xs="12"> 
                            <p>{this.state.descrip}</p>
                        </Col>
                    </Row>
                </Container>
                <Container style={{textAlign:"center",backgroundColor:"#00AAC1",marginTop:"2rem",marginBottom:"2rem",padding:"1rem",borderRadius:"2rem",color:"white"}} data-aos="zoom-out">
                    <Row style={{justifyContent:"center",backgroundColor:"00AAC1"}}>
                        <p style={{fontSize:"2rem"}}>Lista de ingredientes</p>
                    </Row>
                    <Row style={{fontSize:"1.2rem",textTransform:"uppercase"}}>
                        {ingredientes}  
                    </Row>
                </Container>
                <Container style={{textAlign:"center",backgroundColor:"#3EC5BD",marginTop:"2rem",marginBottom:"2rem",padding:"1rem",borderRadius:"2rem",color:"white"}} data-aos="zoom-out">
                    <Row style={{justifyContent:"center"}}>
                        <p style={{fontSize:"2rem"}}>Recomendaciones</p>
                    </Row>
                    <Row style={{fontSize:"1.2rem",padding:"1rem"}}>
                        {this.state.recomendaciones}
                    </Row>
                </Container>
                <h1 style={{textAlign:"center"}}>A cocinar!</h1>

                {/*} Pasos para hacer la receta {*/}

                <Container fluid={true} className="pasosReceta">
                    
                    <Row style={{alignItems:"center",margin:"2rem 0 2rem 0"}}data-aos="fade-right">
                        <Col lg="8" xs="12">
                            <h2 style={{textAlign:"center"}}>Primer paso</h2>
                            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vehicula urna, ac blandit erat gravida eu. Sed tincidunt, nulla vitae ornare sollicitudin, nisl libero facilisis diam, eu volutpat erat ex a nisi. Nunc varius nibh sit amet elit consectetur, sit amet vulputate nunc dapibus. Nullam ultrices ex eget felis venenatis, sit amet elementum arcu gravida. Duis ultrices metus elit. Phasellus in ultrices mauris. In elementum lobortis mauris, at auctor purus sodales at. Nullam lobortis velit urna, id pharetra neque sollicitudin vestibulum. Sed metus ipsum, tincidunt sed elementum ac, semper porta odio. Ut condimentum ornare mi et blandit.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" xs="12">
                            <img className="picture-box" alt="Foto de la receta"  src={require("../../img/recetas/polloalacrema.jpg")}></img>
                        </Col>    
                    </Row>

                    <Row style={{alignItems:"center",margin:"2rem 0 2rem 0"}} data-aos="fade-right">
                        
                        <Col lg="8" xs="12">
                            <h2 style={{textAlign:"center"}}>Segundo paso</h2>
                            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vehicula urna, ac blandit erat gravida eu. Sed tincidunt, nulla vitae ornare sollicitudin, nisl libero facilisis diam, eu volutpat erat ex a nisi. Nunc varius nibh sit amet elit consectetur, sit amet vulputate nunc dapibus. Nullam ultrices ex eget felis venenatis, sit amet elementum arcu gravida. Duis ultrices metus elit. Phasellus in ultrices mauris. In elementum lobortis mauris, at auctor purus sodales at. Nullam lobortis velit urna, id pharetra neque sollicitudin vestibulum. Sed metus ipsum, tincidunt sed elementum ac, semper porta odio. Ut condimentum ornare mi et blandit.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" xs="12">
                            <img className="picture-box" alt="Foto de la receta"  src={require("../../img/recetas/polloalacrema.jpg")}></img>
                        </Col> 
                    </Row>

                    <Row style={{alignItems:"center",margin:"2rem 0 2rem 0"}} data-aos="fade-right">
                        <Col lg="8" xs="12">
                            <h2 style={{textAlign:"center"}}>Tercer paso</h2>
                            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vehicula urna, ac blandit erat gravida eu. Sed tincidunt, nulla vitae ornare sollicitudin, nisl libero facilisis diam, eu volutpat erat ex a nisi. Nunc varius nibh sit amet elit consectetur, sit amet vulputate nunc dapibus. Nullam ultrices ex eget felis venenatis, sit amet elementum arcu gravida. Duis ultrices metus elit. Phasellus in ultrices mauris. In elementum lobortis mauris, at auctor purus sodales at. Nullam lobortis velit urna, id pharetra neque sollicitudin vestibulum. Sed metus ipsum, tincidunt sed elementum ac, semper porta odio. Ut condimentum ornare mi et blandit.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" xs="12">
                            <img className="picture-box" alt="Foto de la receta"  src={require("../../img/recetas/polloalacrema.jpg")}></img>
                        </Col>    
                    </Row >
                    <h1 style={{textAlign:"center"}}>A disfrutar!</h1>
                    <Row style={{justifyContent:"center",marginBottom:"2rem",padding:"1rem"}} data-aos="zoom-out">
                        <img style={{textAlign:"center"}}alt="recetaFinal" className="picture-box" src={require("../../img/recetas/polloalacrema.jpg")}></img>
                    </Row>
                </Container>
                <Row style={{margin:"0rem 1rem 2rem 1rem"}} data-aos="fade-right">
               
                    <button onClick={this.handleFavorite}className="btn-fav">agregar a recetas favorita <FontAwesomeIcon style={{color:"white"}} className="iconos"icon={faHeart} size="1x"/></button>
               
                </Row>
            <Footer />
            </div>
        )
    }
}

