import React, {Component} from 'react'
import {Container,Col,Row} from 'reactstrap'
import LoadingPage from './Loading.component'
import Ingredient from './Recipes/Ingredient.component'

export default class Recipes extends Component{
constructor(){
        super()
        this.state = {
            isLoading: true,
            ingredientes: [],
            ingrediente:'',
            nombre:''
        }
        this.onAddItem = this.onAddItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },500)
    }
    
   handleChange(event){
       const value = event.target.value
       this.setState({
           ingrediente:value
       })

   }
    
   onAddItem = (event) => {
       let array = this.state.ingredientes
       if(this.state.ingrediente === ""){
            alert("Ingrese el campo por favor")
       }
       if(array.length === 10){
           alert("Cantidad máxima")
       }
       else if(array.includes(this.state.ingrediente)){
           alert("Ingrediente ya ingresado, ingrese otro por favor")
       }
       else(
        this.setState(state =>{
            const ingredientes = [...state.ingredientes,state.ingrediente]
            
            return{
                ingredientes,
                ingrediente:'',
            }
         })
        )
        event.preventDefault();
    }

    render(){
        const ingredients = this.state.ingredientes.map((ing) =>
            <Col lg="auto" sm="auto"> <Ingredient text={ing}></Ingredient></Col>
        )
        
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorBusqueda" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row className="contenedorIngredientes">
                        <Col style={{borderRight:"1px solid #3EC5BD",margin:"0.5rem"}}>
                            <p className="titulo">Agregar ingredientes</p>
                            <form className="formulario">
                                <label><input type="text" value={this.state.nombre} placeholder="Ingrese el nombre del plato" /></label>
                                <label><input type="text" value={this.state.ingrediente} onChange={this.handleChange} placeholder="Ingrese su ingrediente (max 10)" /></label>
                                <button onClick={this.onAddItem}>Agregar</button>
                            </form>
                        </Col>
                        <Col className="ingredientes" style={{margin:"0.5rem"}}>
                            <p className="titulo">Ingredientes</p>
                            <Row>
                                {ingredients}
                                {/*}Falta agregar que queden bien los ingredientes cuando son más de 5 en una fila{*/}
                            </Row>
                        </Col>
                    </Row>
                    <Row className="contenedorIngredientes">
                        <button class="btn-buscar">Buscar Receta</button>
                    </Row>
                </Container>
                <Container className="contenedorBusquedaRecetas">
                    <h1>Hoy comemos...</h1>
                </Container>
            </div>
            )
    }
}
