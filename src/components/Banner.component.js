import React from 'react'
//import {Link} from "react-router-dom";
import {Container,Row,Col} from 'reactstrap'


function Banner(props){
    return(
        <Container className="banner" fluid={true}>
            <Row>
                <Col ><h1 className="texto-banner"> {props.title}</h1></Col>
            </Row>
        </Container>
    )
}

export default Banner