import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'

class NavBar extends Component{

    render(){
        return(
           <Router>
               <Container fluid= "true">
               <Row className="navegacion">
                    <Col sm="8"xs="12"><h1 className="title">Que comemos hoy</h1></Col>
                    <Col sm="4"xs="12">
                        <ul className="contenedorItems">
                            <li>
                                <Link className="link" to="/recipes">Recetas</Link>
                            </li>
                            <li>
                                <Link className="link" to="/about">Nosotros</Link>
                            </li>
                            <li>
                                <Link className="linkLogin" to="/login">Iniciar sesión</Link>
                            </li>
                         </ul>
                    </Col>
               </Row>
               </Container>
           </Router>
        )
    }

}

export default NavBar