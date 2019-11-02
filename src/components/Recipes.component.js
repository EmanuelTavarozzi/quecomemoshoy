import React, {Component} from 'react'
import {Container,Col,Row} from 'reactstrap'
import LoadingPage from './Loading.component'


export default class Recipes extends Component{
constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },1)
    }
    
    render(){
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorBusqueda" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row className="contenedorIngredientes" >
                        <Col className="formulario" style={{borderRight:"1px solid #3EC5BD",margin:"0.5rem"}}>
                            <p className="titulo">Agregar ingredientes</p>
                            <form>
                                <input placeholder="Ingrese el nombre del plato" />
                                <input placeholder="Ingrese su ingrediente" />
                                <button>Agregar</button>
                            </form>
                        </Col>
                        <Col className="ingredientes" style={{margin:"0.5rem"}}>
                            <p className="titulo">Ingredientes</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
    }
}