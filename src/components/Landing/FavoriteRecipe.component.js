import React from 'react'
//import {Link} from "react-router-dom";
import { faTrophy, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Row, Col} from 'react-bootstrap'



export default class FavoriteRecipe extends React.Component{
    constructor(){
        super()
        this.state = {
        
        }
    }
    render(){
        return(
               <Container className="contenedorReceta" width="80%">
                   <Row xs="12" lg="12" styles={{alignItems:"center"}}>
                        <Col lg="6" xs="12">
                            <h2 className="title">Ensalada con atún</h2>
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
                                < p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras efficitur gravida turpis, id egestas sapien convallis in .Suspendisse vitae egestas mi.Vivamus tincidunt, leo nec consequat auctor, metus elit dictum massa, sit amet bibendum dui est nec tortor.Praesent dapibus vulputate tristique.Pellentesque tempus erat eget tempus facilisis.Etiam volutpat non lectus nec egestas.Aliquam eget augue ac nisl luctus venenatis.Aliquam et lectus a arcu tempus laoreet ut ut ex.Sed rhoncus dolor sed scelerisque vestibulum.Integer sed porttitor neque.Nulla vel arcu non elit porttitor hendrerit a sit amet diam.Duis non augue sed velit varius sodales. </p>
                            </Col>
                            <Col xs="12" lg="6">
                                <img style={{borderRadius:"1.5rem",maxWidth:"100%"}} alt="No hay imagen"src={require('../../img/banner.jpg')}></img>
                            </Col>
                    </Row>

               </Container>
               

               
            
        )
    }
}

