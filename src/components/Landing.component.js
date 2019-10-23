import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'
import Card from './Card.component'
import Banner from './Banner.component'

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
                {/*} Recetas favoritas {*/}
                <Banner title={"Nosotros"}/>

                
            </div>
        )
    }

}
