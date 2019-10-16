import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'

export default class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            isLogged: false,
            username: "Iniciar sesión"
        }
        this.handleChange = this.handleChange.bind(this)
    }   

    handleChange(){
        this.state.isLogged === false ? this.setState({ username: "Viviana", isLogged:true}) : this.setState({username: "Iniciar sesión",isLogged:false})
    }
    render(){
        return(
                <Container fluid= "true">
                <Row className="navegacion">
                        <Col sm="8"xs="12">
                            <Link className="link title" to="/">Que comemos hoy</Link>
                        </Col>
                        <Col sm="4"xs="12">
                            <ul className="contenedorItems">
                                <li>
                                    <Link className="link" to="/recipes">Recetas</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/about">Nosotros</Link>
                                </li>
                                <li>
                                    <Link className="linkLogin" to="/login" onChange={this.handleChange}>{this.state.username}</Link>
                                </li>
                            </ul>
                        </Col>
                </Row>
                {/*}<button onClick={this.handleChange}>Log out/in</button>{*/}
                </Container>
        )
    }

}
