import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Container, Row, Col, Button} from 'reactstrap'


export default class NavBar extends Component{
    constructor(){
        super()
        this.handleLogout = this.handleLogout.bind(this)
        
    }   

    handleLogout(){
        this.props.logout()
    }

    render(){
        return(
                <Container fluid={true}>
                <Row className="navegacion">
                        <Col lg="6" md="5" sm="12" xs="12">
                            <Link className="link title" to="/">Que comemos hoy</Link>
                        </Col>
                        <Col lg="6" md="7" sm="12" xs="12">
                            <ul className="contenedorItems">
                                <li>
                                    <Link className="link" to="/recipes">Recetas</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/about">Nosotros</Link>
                                </li>
                                { this.props.isLogged && this.props.isNutricionist &&
                                    <li>
                                        <Link className="link" to="/createRecipe">Crear Receta</Link>
                                    </li>
                                }
                                <li>
                                    {!this.props.isLogged ?
                                    <Link className="linkLogin" to="/login">Iniciar Sesion</Link>
                                    :
                                    <React.Fragment>
                                        <Link className="linkLogin" to="/profile">{this.props.username}</Link>
                                        <Button onClick={this.handleLogout} style={{padding:"0.3rem",backgroundColor:"#3EC5BD",border:"#4CC4BD", marginLeft:"1rem",fontSize: "1.4rem",marginTop:"-0.5rem"}}>Logout
                                        </Button>
                                    </React.Fragment>
                                    }
                                </li>
                                
                            </ul>
                        </Col>
                </Row>
                {/*}<button onClick={this.handleChange}>Log out/in</button>{*/}
                </Container>
        )
    }

}
