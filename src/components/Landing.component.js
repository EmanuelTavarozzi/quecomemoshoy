import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'
import Card from './Card.component'

export default class Landing extends Component{

    render(){
        return( 
            <div>
                <Container fluid= "true" className="landing-image">
                        <h1 data-aos="fade-in" className="landing-title">Aprender comiendo</h1>
                        <h3 className="motivation-phrase">Si comes bien <span>hoy</span> tu cuerpo te lo agradecerá <span>mañana</span></h3>
                </Container>
                <Container>
                    <h2 data-aos="fade-in"className="landing-title">Encontra la comida ideal para el momento ideal</h2>
                </Container>
                <Container fluid="true">
                    <Row>
                        <Col data-aos="fade-in" xs="12" sm="6" md="4"><Card title={"Hey, test"} body={"How you doin?"} img={""}/></Col>
                        <Col data-aos="fade-in" xs="12" sm="6" md="4"><Card title={"Hey, test"} body={"How you doin?"} img={""}/></Col>
                        <Col data-aos="fade-in" xs="12" sm="6" md="4"><Card title={"Hey, test"} body={"How you doin?"} img={""}/></Col>
                    </Row>
                </Container>
                
            </div>
        )
    }

}
