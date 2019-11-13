import React from 'react'
//import {Link} from "react-router-dom";
import { faTrophy, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'


export default class FavoriteRecipe extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes: [],
        }
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

    render(){
        return(
               <Container className="contenedorReceta" width="80%">
                   <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                        <Col lg="6" xs="12">
                            <h2 className="title"> {this.props.title}</h2>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className="contenedorIconos">
                                <div>
                                    <FontAwesomeIcon style={{color:"#3EC5BD"}} className="iconos"icon={faThumbsUp} size="2x"/>
                                    <h3 className="iconos" style={{marginLeft:"1rem"}}>{this.props.likes}</h3>
                                </div>
                                <FontAwesomeIcon className="iconos"style={{color:this.props.color}}icon={faTrophy} size="2x"/> 
                            </div>  
                        </Col>
                   </Row>
                    <Row xs="12" lg="12" style={{alignItems:"center"}}>
                            <Col xs="12" lg="6" styles={{textAlign:"right"}}>
                                < p className= "procedure" >{this.props.procedure } </p>
                            </Col>
                            <Col xs="12" lg="6">
                                <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../../img/banner.jpg')}></img>
                            </Col>
                    </Row>

               </Container>          
        )
    }
}

