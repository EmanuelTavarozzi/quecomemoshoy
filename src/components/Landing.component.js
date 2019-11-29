import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Card from './Landing/Card.component'
import Banner from './Landing/Banner.component'
import FavoriteRecipe from './Landing/FavoriteRecipe.component'
import Contact from './Landing/Contact.component'
import Footer from './Footer.component'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Card1 from '../img/card1.jpg'
import Card2 from '../img/card2.jpg'
import Card3 from '../img/card3.jpg'

export default withRouter(class Landing extends Component{

    constructor(props){
        super(props);

        this.state = {
            recipes: [],
        }
        this.redirectTo = this.redirectTo.bind(this)
        this.handleGoToAbout = this.handleGoToAbout.bind(this)
    }

    handleGoToAbout() {
        this.props.history.push(`/about`)
    }

    callAPI() {
        axios.get("http://localhost:5000/recipes/landingRecipes", { })
        .then(res => {
            console.log(res);
            this.setState({ recipes: res.data })
        });
    }
    
    componentDidMount() {
        this.callAPI();
    }

    redirectTo(recipeId) {
        this.props.history.push(`/recipe/${recipeId}`)
    }

    render(){
        return( 
            <div>
                <Container fluid={true} className="landing-image">
                        <h1 data-aos="fade-in" className="landing-title">Aprender comiendo</h1>
                        <h3 className="motivation-phrase" data-aos="fade-right">Si comes bien <span>hoy</span> tu cuerpo te lo agradecerá <span>mañana</span></h3>
                </Container>
                <Container>
                    <h2 style={{textAlign:"center"}}data-aos="fade-in"className="landing-title">Encontra la comida ideal para el momento ideal</h2>
                </Container>

                <Container fluid={true}>
                    
                        <Row>
                            <Col data-aos="fade-right" data-aos-once="true" data-aos-delay="15050" xs="12" sm="12" md="4">
                                <Card title="Cocina más fácil" body="Ingresa los ingredientes, busca una receta y listo! Ya estas listo para cocinar" img={Card1} />
                            </Col>
                            <Col data-aos="flip-left"  data-aos-once="true" xs="12" sm="12" md="4">
                                <Card title="Cambia la rutina" body="Una buena alimentación proviene de una alimentación variada" img={Card2}/>
                            </Col>
                            <Col data-aos="fade-left"  data-aos-once="true" xs="12" sm="12" md="4">
                                <Card title="Compartí momentos" body="Sorprende a amigos y familiares con nuevas recetas" img={Card3}/>
                            </Col>
                        </Row>
                    
                </Container>
                <Banner title={"Recetas del mes"}/>  
                <div style={{textAlign:'center'}}>
                {        
                this.state.recipes.map((item,i) => 
                    <div key={i} style={{cursor:'pointer', display:"inline-block", width: "80%"}} onClick= {()=> this.redirectTo(item._id)}>
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                        <FavoriteRecipe image={item.imageurl} color="#efb810" likes={item.likes} title={item.name} description={item.description} index={i}/>
                        </div>
                    </div>   
                )
                } 
                </div>
                <Banner title={"Nosotros"}/>
                <Container style={{padding:"2rem",borderRadius:"2rem",width:"95%"}} className="contenedorReceta" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                    <Row style={{alignItems:"center"}}xs="12" lg="12">
                        <Col lg="8" xs="8">
                            <p> <span style={{color:"#3EC5BD",textTransform:"uppercase"}}> ¿qué comemos hoy? </span> nace como un proyecto que busca mejorar la alimentación de las personas haciendo más simple y rápida la forma de encontrar recetas que venzan las típicas dietas tradicionales. Nuestro objetivo es lograr que la alimentación saludable y variada no sea un peso en la vida de las personas, si no, que sea un objetivo por el cual las personas luchen y disfruten a la vez. 
                            </p>
                            <Button onClick={this.handleGoToAbout}style={{backgroundColor:"#3EC5BD",border:"#4CC4BD",transition:"1s",padding:"1rem 2rem 1rem 2rem",marginTop:"1rem"}}>Conocenos!</Button>
                        </Col>
                        <Col lg="4" xs="4">
                            <img style={{maxWidth:"100%",color:"#3EC5BD"}} alt="No hay imagen"src={require('../img/about.png')}></img>
                        </Col>
                    </Row>
                </Container>
                <Contact />
                <Footer />
            </div>
        )
    }

})
