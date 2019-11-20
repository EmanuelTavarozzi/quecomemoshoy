import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
//import axios from 'axios'
import Footer from '../Footer.component'
import Img from 'react-image'


export default class RecipesCard extends React.Component{
    constructor(){
        super()
        this.state = {
            titulo: "Ensalada de atún con magia",
            descrip: "Etiam porttitor tortor id nisi consequat, vitae sodales sapien commodo. Donec non neque nunc. Praesent fringilla ex orci, et volutpat sapien ultrices eget. Praesent tincidunt mi ligula, nec ullamcorper libero fermentum non. Integer laoreet luctus finibus. Aenean euismod, massa non tincidunt tincidunt, sapien nulla viverra mauris, quis dignissim mi purus ac ipsum. Quisque scelerisque luctus lorem eget congue.",
            ingredientes:['lechuga','tomate','arroz','carne picada'],
            recomendaciones: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed neque at metus posuere faucibus. Curabitur sed est lacus. Mauris mattis pulvinar mi. Nullam ipsum est, d, massa non tincidunt tincidunt, sapien nulla viverra mauris, quis dignissim mi purus ac ipsum. Quisque scelerisque luctus lorem eget congue.",
            pasos: [{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed neque at metus posuere faucibus. Curabitur sed est lacus. Mauris mattis pulvinar mi. Nullam ipsum est, d, massa non tincid",src:"'C:/Users/Emanuel/Desktop/Proyectos/quecomemoshoy/src/img/landing.jpg'"}]
    
        }
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

    render(){
        const ingredientes = this.state.ingredientes.map((ing) =>
            <Col><p>{ing}</p></Col>
        )
        const pasos = this.state.pasos.map((paso) => 
            <Row>
                <Col lg="6">
                    <p>{paso.text}</p>
                </Col>
                <Col lg="6">
                    <img alt="imagen" src={require({paso.src})} ></img>
                    {console.log(paso.src)}
                </Col>
            </Row>
        )
            
        
        return(
            <div>
               <Container className="contenedorRecetaParticular" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row>
                        <Col>
                            <h3 style={{fontSize:"4rem",marginBottom:"4rem",textTransform:"uppercase",color:"white"}}>{this.state.titulo}</h3>
                        </Col>
                    </Row>
                    <Row style={{borderRadius:"1rem",border:"5px solid grey ",alignItems:"center",padding:"2rem"}}className="contenedorIngredientes">
                        <Col xs="12"> 
                            <p>{this.state.descrip}</p>
                        </Col>
                    </Row>
                </Container>
                <Container style={{textAlign:"center",backgroundColor:"#00AAC1",marginTop:"2rem",marginBottom:"2rem",padding:"1rem",borderRadius:"2rem",color:"white"}}>
                    <Row style={{justifyContent:"center",backgroundColor:"00AAC1"}}>
                        <p style={{fontSize:"2rem"}}>Lista de ingredientes</p>
                    </Row>
                    <Row style={{fontSize:"1.2rem",textTransform:"uppercase"}}>
                        {ingredientes}  
                    </Row>
                </Container>
                <Container style={{textAlign:"center",backgroundColor:"#3EC5BD",marginTop:"2rem",marginBottom:"2rem",padding:"1rem",borderRadius:"2rem",color:"white"}}>
                    <Row style={{justifyContent:"center"}}>
                        <p style={{fontSize:"2rem"}}>Recomendaciones</p>
                    </Row>
                    <Row style={{fontSize:"1.2rem",padding:"1rem"}}>
                        {this.state.recomendaciones}
                    </Row>
                </Container>
                <h1 style={{textAlign:"center"}}>A cocinar!</h1>
                <Container fluid={true}>

                    {pasos}

                </Container>
            <Footer />
            </div>
        )
    }
}

