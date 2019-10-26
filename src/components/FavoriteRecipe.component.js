import React from 'react'
//import {Link} from "react-router-dom";
import {Container,Row,Col} from 'reactstrap'
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class FavoriteRecipe extends React.Component{
    constructor(){
        super()
        this.state = {
        
        }
    }
    render(){
        return(
                <Container className="contenedorReceta" >
                    <Row>
                        <Col style={{color:this.props.color}}lg="4" ><FontAwesomeIcon style={{margin:"1.5rem"}}icon={faTrophy} size="10x"/></Col>
                        <Col lg="4">
                            <h2>Ensalada de atún</h2>
                            <p>Lorem ipsum dolor sit amet vivamus sed mi et felis</p>
                        </Col>
                       <Col lg="4" >
                        <h3 style={{textAlign:"end"}}>{this.props.likes}</h3>
                        <img style={{borderRadius:"1.5rem"}}width="100%" alt="No hay imagen"src={require('../img/banner.jpg')}></img>
                       </Col>
                        
                    </Row>
                </Container>
        )
    }
}

