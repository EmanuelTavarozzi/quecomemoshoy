import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'
import LoadingPage from './Loading.component'
export default class Landing extends Component{
    constructor(){
        super()
        this.state = {
            isLoading:true,
            isLogin:true,
            email: "",
            password:"",
            active: "btn-form",
            disabled:"btn-form-disabled"
        }
        this.handlechange = this.handlechange.bind(this)
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },1000)
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
            this.state.isLoading ?
            <LoadingPage />
            :
            <div>
                <Container className="contenedorLogin">
                    <div data-aos="fade-right"><h2 className="title" style={{fontSize:"6rem"}}>Que comemos hoy</h2></div>
                    <div data-aos="fade-right"><h1 style={{letterSpacing:"1.2rem"}}>Aprender comiendo</h1></div>
                    <div className="contenedorForm" fluid={true} data-aos="fade-left">
                        <Row>
                            <Col lg="6" xs="12">
                                <button className={this.state.active} onClick={this.handlechange} name="login">Log In</button>
                            </Col>
                            <Col lg="6" xs="12">
                                <button className={this.state.disabled} name="sing-up" onClick={this.handlechange}>Sign Up</button>
                            </Col>
                        </Row>
                        {this.state.isLogin ? 
                        <div className="animated fadeInRight">
                            <Row className="login-form">
                                <Col>
                                    <form style={{display:"flex",flexDirection:"column"}}>
                                        <label><input name="email" placeholder="Correo electrónico"></input></label>
                                        <label><input name="password" placeholder="Contraseña"></input></label>
                                        <button className="btn-log"> Log In</button>
                                    </form>
                                </Col>
                            </Row>
                        </div>
                        
                        
                        
                        :
                        <div className="animated fadeInLeft"> 
                            <Row className="login-form">
                                <Col>
                                    <form style={{display:"flex",flexDirection:"column"}}>
                                        <label><input name="email" placeholder="Correo electrónico"></input></label>
                                        <label><input name="password" placeholder="Contraseña"></input></label>
                                        <button className="btn-log"> Sign Up </button>  
                                    </form> 
                                </Col>
                            </Row>
                        </div>
                        
                        }
                    </div>
                
                </Container>
         </div>       
        )
    }

}
