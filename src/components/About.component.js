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
            palabrasClave: ['Passion','Dedication','Trust'], // generar funcion que vaya poniendo distintas caracteristicas debajo del h1 de la pagina
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
            fontSize: "5rem", 
            color: "#3EC5BD", 
            textTransform: "uppercase", 
            fontFamily: "Quattrocento, serif",
            letterSpacing:"2rem"
            
        }
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorAbout" fluid= "true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <h1 style={styles}>Que comemos hoy</h1>
                    <Container style={{backgroundColor:"white",borderRadius:"2rem",padding:"2rem",textAlign:"center",marginTop:"2rem"}} data-aos="fade-down">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat magna, a pretium ipsum. Praesent consectetur sapien ac vehicula ultrices. Proin rutrum eros elit, sit amet porttitor quam ultrices eget. Pellentesque pulvinar dui id nisl imperdiet, nec luctus orci dapibus. Etiam at nulla sed enim tincidunt feugiat. Proin egestas, sem et feugiat eleifend, purus nulla fringilla nulla, non consequat mauris lorem in sem. Ut auctor felis vel pretium tempus. Praesent laoreet quam in magna dignissim, ac tincidunt lectus gravida.</p>
                    <div >
                    </div>
                    </Container>
                </Container>
                    
                    <Container style={{marginLeft:"1rem" ,marginTop:"1rem"}}className="contenedorReceta" width="80%" data-aos="fade-right">
                    <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                            <Col lg="6" xs="12">
                                <h2 className="title">Ensalada con atún</h2>
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
                                <Col xs="12" lg="6" styles={{textAlign:"right"}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras efficitur gravida turpis, id egestas sapien convallis in .Suspendisse vitae egestas mi.Vivamus tincidunt, leo nec consequat auctor, metus elit dictum massa, sit amet bibendum dui est nec tortor.Praesent dapibus vulputate tristique.Pellentesque tempus erat eget tempus facilisis.Etiam volutpat non lectus nec egestas.Aliquam eget augue ac nisl luctus venenatis.Aliquam et lectus a arcu tempus laoreet ut ut ex.Sed rhoncus dolor sed scelerisque vestibulum.Integer sed porttitor neque.Nulla vel arcu non elit porttitor hendrerit a sit amet diam.Duis non augue sed velit varius sodales. </p>
                                </Col>
                                <Col xs="12" lg="6">
                                    <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../img/banner.jpg')}></img>
                                </Col>
                        </Row>
                </Container>
                <Container style={{marginRight:"1rem" ,marginTop:"1rem" }}className="contenedorReceta" width="80%" data-aos="fade-left">
                    <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                            <Col lg="6" xs="12">
                                <h2 className="title">Ensalada con atún</h2>
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
                                <Col xs="12" lg="6" styles={{textAlign:"right"}}>
                                    < p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras efficitur gravida turpis, id egestas sapien convallis in .Suspendisse vitae egestas mi.Vivamus tincidunt, leo nec consequat auctor, metus elit dictum massa, sit amet bibendum dui est nec tortor.Praesent dapibus vulputate tristique.Pellentesque tempus erat eget tempus facilisis.Etiam volutpat non lectus nec egestas.Aliquam eget augue ac nisl luctus venenatis.Aliquam et lectus a arcu tempus laoreet ut ut ex.Sed rhoncus dolor sed scelerisque vestibulum.Integer sed porttitor neque.Nulla vel arcu non elit porttitor hendrerit a sit amet diam.Duis non augue sed velit varius sodales. </p>
                                </Col>
                                <Col xs="12" lg="6">
                                    <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../img/banner.jpg')}></img>
                                </Col>
                        </Row>
                </Container>
                <Container style={{marginLeft:"1rem" ,marginTop:"1rem"}}className="contenedorReceta" width="80%" data-aos="fade-right">
                    <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                            <Col lg="6" xs="12">
                                <h2 className="title">Ensalada con atún</h2>
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
                                <Col xs="12" lg="6" styles={{textAlign:"right"}}>
                                    < p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras efficitur gravida turpis, id egestas sapien convallis in .Suspendisse vitae egestas mi.Vivamus tincidunt, leo nec consequat auctor, metus elit dictum massa, sit amet bibendum dui est nec tortor.Praesent dapibus vulputate tristique.Pellentesque tempus erat eget tempus facilisis.Etiam volutpat non lectus nec egestas.Aliquam eget augue ac nisl luctus venenatis.Aliquam et lectus a arcu tempus laoreet ut ut ex.Sed rhoncus dolor sed scelerisque vestibulum.Integer sed porttitor neque.Nulla vel arcu non elit porttitor hendrerit a sit amet diam.Duis non augue sed velit varius sodales. </p>
                                </Col>
                                <Col xs="12" lg="6">
                                    <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../img/banner.jpg')}></img>
                                </Col>
                        </Row>
                </Container>
                <Footer />
            </div>
            
            )
    }

}
