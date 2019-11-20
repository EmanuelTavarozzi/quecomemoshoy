import React, {Component} from 'react'
import {Redirect} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap'
import LoadingPage from './Loading.component'
export default class Landing extends Component{
    constructor(){
        super()
        this.state = {
            isLoading:true,
            isLoginWindow:true,
            isLogin:false,
            email: "",
            password:"",
            active: "btn-form",
            disabled:"btn-form-disabled"
        }
        this.handlechangeWindow = this.handlechangeWindow.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },1000)
    }
    

    handlechangeWindow(){
        this.setState((prevState) => {
            return {
                isLoginWindow:!prevState.isLoginWindow,
                active: prevState.disabled,
                disabled: prevState.active,
                email:"",
                password:""
            }
        })
    }

    handleSignUp(event){
        if (this.state.email === "" && this.state.password === "") {
            alert("Por favor, ingrese todos los campos")
        } else(
            setTimeout(() =>{
                // Endpoint post para crear el usuario --> hacemos que al crear se inicie automáticamente sesión o no? Si no, habría que mostrar un mensaje de creación correcta y que inicie el usuario.
                this.setState({
                    isLogin: true
                })
            },1000)
            
        )
        event.preventDefault()
    }

    
    handleLogIn(event){
        if(this.state.email === "" && this.state.password === ""){
            alert("Por favor, ingrese todos los campos")
        }
        else(
            setTimeout(() => {
                // Endpoint para iniciar sesión
                this.setState({
                    isLogin: true
                })
            }, 1000)
        )
        event.preventDefault()
    }
    

    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            this.state.isLoading ?
            <LoadingPage />
            :
            <div>
                <Container className="contenedorLogin">
                    <div data-aos="fade-right"><h2 className="title" style={{fontSize:"4rem"}}>Que comemos hoy</h2></div>
                    <div data-aos="fade-right"><h1 style={{letterSpacing:"1.2rem"}}>Aprender comiendo</h1></div>
                    <div className="contenedorForm" fluid={true} data-aos="fade-left">
                        <Row>
                            <Col lg="6" xs="12">
                                <button className={this.state.active} onClick={this.handlechangeWindow} name="login">Log In</button>
                            </Col>
                            <Col lg="6" xs="12">
                                <button className={this.state.disabled} name="sing-up" onClick={this.handlechangeWindow}>Sign Up</button>
                            </Col>
                        </Row>

                        {this.state.isLoginWindow ? 
                        <div className="animated fadeInUp">
                            <Row className="login-form">
                                <Col>
                                    <form style={{display:"flex",flexDirection:"column"}}>
                                        <label><input value={this.state.email}name="email" placeholder="Correo electrónico" type="email" onChange={this.handleChange}></input></label>
                                        <label><input value={this.state.password}name="password" placeholder="Contraseña" onChange={this.handleChange}></input></label>
                                        <button onClick={this.handleLogIn} className="btn-log">Log In</button>
                                        {this.state.isLogin ? <Redirect to="/"/> : null}
                                    </form>
                                </Col>
                            </Row>
                        </div>
                        
                        :
                        <div className="animated fadeInDown"> 
                            <Row className="login-form">
                                <Col>
                                    <form style={{display:"flex",flexDirection:"column"}}>
                                        <label><input value={this.state.email} name="email" placeholder="Correo electrónico" type="email" onChange={this.handleChange}></input></label>
                                        <label><input value={this.state.password} name="password" placeholder="Contraseña" onChange={this.handleChange}></input></label>
                                        <button onClick={this.handleSignUp} className="btn-log"> Sign Up</button>
                                        {this.state.isLogin ? <Redirect to="/"/> : null}  
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
