import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'



export default class FavoriteRecipe extends React.Component{
    constructor(){
        super()
        this.state = {
            nombre:"",
            email:"",
            consulta:"Por favor, escriba su consulta" 
        }
    
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick(){
        this.setState({consulta:""})
    }

    handleSubmit(event){
        if(this.state.nombre === "" || this.state.email === "" || this.state.consulta === "")
            alert("Por favor, ingrese todos los campos!")
        else{
            const string = `Your name is ${this.state.nombre} with email ${this.state.email} and your question ${this.state.consulta}`
            alert(string)
            this.setState({nombre:"",email:"",consulta:"Por favor, escriba su consulta"})
        }
        event.preventDefault();
    }
    render(){
        return(
               <Container style={{marginTop:"4rem",marginBottom:"4rem"}}>
                   <Row xs="12" lg="12" styles={{alignItems:"center"}} >
                        <Col lg="7" xs="12" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                            <img alt="Contacto "src={require('../../img/contacto.PNG')}></img>
                        </Col>
                        <Col lg="5" xs="12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Container className="contenedorContacto">
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                    <input 
                                        style={{width:"100%",borderRadius:"1rem",border:0}}
                                        type="text"
                                        name="nombre"
                                        placeholder="Ingrese su nombre"
                                        onChange={this.handleChange}
                                        value={this.state.nombre}>
                                    </input>
                                    </label>
                                    <label>
                                    <input
                                        style={{width:"100%",borderRadius:"0.5rem",border:0}}
                                        type="email"
                                        name="email"
                                        placeholder="Ingrese su correo"
                                        onChange={this.handleChange}
                                        value={this.state.email}>
                                    </input>
                                    </label>
                                    <label>
                                    <textarea
                                        style={{width:"100%",borderRadius:"0.5rem",resize:"none"}}
                                        name="consulta"
                                        rows="8"
                                        maxLength="500"
                                        onClick={this.handleClick}
                                        onChange={this.handleChange}
                                        value={this.state.consulta}
                                        placeholder="Por favor, escriba su consulta">
                                    </textarea>
                                    </label>
                                    <button className="btnEnviar">Enviar</button>
                                </form>
                            </Container>
                        </Col>
                   </Row>
                    

               </Container>
               

               
            
        )
    }
}