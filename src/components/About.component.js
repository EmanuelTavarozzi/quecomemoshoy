import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Container,Row,Col} from 'reactstrap'
import LoadingPage from './Loading.component'
import Footer from './Footer.component'

export default class About extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },500)
    }


    
    render(){
        const styles={
            textAlign: "center", 
            fontSize: "4rem", 
            color: "#3EC5BD", 
            textTransform: "uppercase", 
            fontFamily: "Quattrocento, serif",
            marginTop:"2rem",
            padding:0
            
        }
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorAbout" fluid= "true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                
                    <h1 style={styles}>Que comemos hoy</h1>
                    
                    <Row>

                    <Col xs="12">
                        
                        <Container style={{backgroundColor:"white",borderRadius:"2rem",padding:"1rem",textAlign:"center",marginTop:"1rem"}} data-aos="fade-down">
                        <p>QUE COMEMOS HOY está conformado de un gran equipo que busca brindar a todos nuestros usuarios la mejor de las experiencias a través de nuestra página web y de los servicios nutricionales que otorgamos. Es por esto que día a día trabajamos para poder lograr el objetivo de promover una alimentación variada y saludable a todo aquel que esté dispuesto.
                        Creemos en todo lo que hacemos con nuestros servicios y estamos dispuestos a un crecimiento constante.
                        </p>
                        <div >
                        </div>
                        </Container>
                    </Col>
                </Row>
                </Container>
                    
                    <Container style={{marginLeft:"1rem" ,marginTop:"1rem"}}className="contenedorReceta" width="80%" data-aos="fade-right">
                    <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                            <Col lg="6" xs="12">
                                <h2 className="title">Dedicados</h2>
                            </Col>
                            <Col lg="6" xs="12">
                                <div className="contenedorIconos">
                                    <div>
                                    
                                        <h3 className="iconos" style={{marginLeft:"1rem"}}>{this.props.likes}</h3>
                                    </div>
                                </div>  
                            </Col>
                    </Row>
                        <Row xs="12" lg="12" style={{alignItems:"center"}}>
                                <Col xs="12" lg="10" styles={{textAlign:"right"}}>
                                    <p>Buscamos brindar siempre la mejor atención posible a nuestros clientes, apoyándolos en todas las etapas del proceso y estando dispuestos ante cualquier duda o ayuda que el cliente necesite. Tanto como para nuestros clientes como para nuestros nutricionistas, creemos que el verdadero poder constructivo está en trabajar todos juntos, basándonos en que todos salgamos ganadores en las distintas situaciones que enfrentamos.
                                    </p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../img/dedicados.jpg')}></img>
                                </Col>
                        </Row>
                </Container>
                <Container style={{marginRight:"1rem" ,marginTop:"1rem" }}className="contenedorReceta" width="80%" data-aos="fade-left">
                    <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                            <Col lg="6" xs="12">
                                <h2 className="title">Responsables</h2>
                            </Col>
                            <Col lg="6" xs="12">
                                <div className="contenedorIconos">
                                    <div>
                                    
                                        <h3 className="iconos" style={{marginLeft:"1rem"}}>{this.props.likes}</h3>
                                    </div>
                                </div>  
                            </Col>
                    </Row>
                        <Row xs="12" lg="12" style={{alignItems:"center"}}>
                                <Col xs="12" lg="10" styles={{textAlign:"right"}}>
                                    < p >La responsabilidad es clave dentro de una empresa, ya que como exigimos a nuestros clientes a ser responsables de su alimentación, también exigimos a todo nuestro equipo que cumpla con su trabajo, y se haga responsable del mismo con la mayor dedicación que alguien pueda dar hacia su trabajo.
                                     </p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../img/responsables.jpg')}></img>
                                </Col>
                        </Row>
                </Container>
                <Container style={{marginLeft:"1rem" ,marginTop:"1rem"}}className="contenedorReceta" width="80%" data-aos="fade-right">
                    <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                            <Col lg="6" xs="12">
                                <h2 className="title">Productivos</h2>
                            </Col>
                            <Col lg="6" xs="12">
                                <div className="contenedorIconos">
                                    <div>
                                    
                                        <h3 className="iconos" style={{marginLeft:"1rem"}}>{this.props.likes}</h3>
                                    </div>
                                </div>  
                            </Col>
                    </Row>
                        <Row xs="12" lg="12" style={{alignItems:"center"}}>
                                <Col xs="12" lg="10" styles={{textAlign:"right"}}>
                                    < p > Vivimos en tiempos donde no hay tiempo que perder, y sabemos que en nuestros clientes esto tampoco es distinto, por lo tanto, buscamos ser lo más productivos y eficientes posibles.Nuestra idea se basa en mejorar lo mejor posible la salud y alimentación de nuestros clientes por esto es que somos una de las páginas líderes del sector.
 </p>
                                </Col>
                                <Col xs="12" lg="2">
                                    <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../img/productivos.jpg')}></img>
                                </Col>
                        </Row>
                </Container>
                <Footer />
            </div>
            
            )
    }

}
