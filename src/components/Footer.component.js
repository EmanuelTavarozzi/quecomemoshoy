import React from 'react'
//import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
//import { fa } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class FavoriteRecipe extends React.Component{
    constructor(){
        super()
        this.state = {
        
        }
    }
    render(){
        return(
               <Container fluid={true }style={{textAlign:"center",padding:"2rem",backgroundColor:"#39938E"}}>
                   <Row>
                        <Col>
                            <h3>Todos los derechos reservados</h3>
                            <h3>Obra de Omar Cuarterolo y Emanuel Tavarozzi</h3>
                        </Col>
                   </Row>

               </Container>
        )
    }
}