import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'
import Card from './Card.component'
import Banner from './Banner.component'
import FavoriteRecipe from './FavoriteRecipe.component'


export default class Landing extends Component{

    render(){
        return( 
            <div>
                <Container fluid= "true" className="landing-image">
                        <h1 data-aos="fade-in" className="landing-title">Aprender comiendo</h1>
                        <h3 className="motivation-phrase">Si comes bien <span>hoy</span> tu cuerpo te lo agradecerá <span>mañana</span></h3>
                </Container>
                <Container>
                    <h2 style={{textAlign:"center"}}data-aos="fade-in"className="landing-title">Encontra la comida ideal para el momento ideal</h2>
                </Container>
                <Container fluid="true">
                    <Row>
                        <Col data-aos="fade-right" data-aos-once="true" data-aos-delay="15050" xs="12" sm="12" md="4"><Card title={"La mejor forma de cocinar"} body={"How you doin?"} img={""}/></Col>
                        <Col data-aos="flip-left"  data-aos-once="true" xs="12" sm="12" md="4"><Card title={"+1000 recetas"} body={"How you doin?"} img={""}/></Col>
                        <Col data-aos="fade-left"  data-aos-once="true" xs="12" sm="12" md="4"><Card title={"El apoyo de una comunidad"} body={"How you doin?"} img={""}/></Col>
                    </Row>
                </Container>
                <Banner title={"Recetas del mes"}/>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"><FavoriteRecipe color="#efb810" likes="500"/></div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"><FavoriteRecipe color="#8a9597"likes="325"/></div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"><FavoriteRecipe color="#cd7f32"likes="120"/></div>
                <Banner title={"Nosotros"}/>
                {/*} Nosotros {*/}
                <Container style={{padding:"2rem",borderRadius:"2rem"}} className="contenedorReceta" data-aos="fade-up" data-aos-duration="500">
                    <Row style={{alignItems:"center"}}xs="12" lg="12">
                        <Col lg="8" xs="8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis nunc, suscipit vel tellus ac, accumsan consectetur lacus. In suscipit ligula nunc, quis sollicitudin dui congue eu. Sed fringilla lectus id ipsum viverra, sed interdum felis pellentesque. Vestibulum ac justo feugiat, maximus elit nec, tempor enim. Sed auctor nunc sit amet est vehicula dignissim. Vivamus nibh est, porta mattis neque nec, posuere accumsan sapien. Aenean blandit varius metus, eget placerat dolor accumsan egestas.</p>
                        </Col>
                        <Col lg="4" xs="4">
                            <img style={{maxWidth:"100%",color:"#3EC5BD"}} alt="No hay imagen"src={require('../img/about.png')}></img>
                        </Col>
                    </Row>
                </Container>    

            </div>
        )
    }

}
