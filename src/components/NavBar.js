import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'

export default class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            isLogged: false,  // esto es lo que hay que cambiar desde login para que se cargue la ruta del perfil y el nombre de la persona en la navbar
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
                                <li>
                                    <Link className="link" to="/createRecipe">Crear Receta</Link>
                                </li>
                                <li>
                                    {!this.state.isLogged ?
                                    <Link className="linkLogin" to="/login" onChange={this.handleChange}>{this.state.username}</Link>
                                    :
                                    <Link className="linkLogin" to="/profile" onChange={this.handleChange}>{this.state.username}</Link>
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
