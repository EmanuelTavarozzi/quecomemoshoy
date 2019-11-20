import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'

export default class Landing extends Component{
    constructor(){
        super()
        this.state = {
            isLogin:true,
            email: "",
            password:"",
            active: "btn-form",
            disabled:"btn-form-disabled"
        }
        this.handlechange = this.handlechange.bind(this)
    }


    handlechange(){
        this.setState((prevState) => {
            return {
                isLogin:!prevState.isLogin,
                active: prevState.disabled,
                disabled: prevState.active
            }
        })
    }
    render(){
        return(
                <Container className="contenedorLogin">
                    <div><h2 className="title" style={{fontSize:"6rem"}}>Que comemos hoy</h2></div>
                    <div><h1 style={{letterSpacing:"1.2rem"}}>Aprender comiendo</h1></div>
                    <div className="contenedorForm" fluid={true}>
                        <Row>
                            <Col lg="6" xs="12">
                                <button className={this.state.active} onClick={this.handlechange} name="login">Log In</button>
                            </Col>
                            <Col lg="6" xs="12">
                                <button className={this.state.disabled} name="sing-up" onClick={this.handlechange}>Sign Up</button>
                            </Col>
                        </Row>
                        {this.state.isLogin ? 
                        <Row>
                            <form>
                                <input name="email" placeholder="Correo electrónico"></input>
                            </form>
                        </Row>
                        
                        
                        
                        : 
                        <Row>
                            <h1>Honasndjo</h1>
                        </Row>
                        
                        
                        }
                    </div>
                </Container>
        )
    }

}
