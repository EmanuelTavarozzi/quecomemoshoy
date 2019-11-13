import React, {Component} from 'react'
import {Container,Col,Row} from 'reactstrap'
import LoadingPage from './Loading.component'
import Ingredients from './Recipes/Ingredients.component'

export default class Recipes extends Component{
constructor(){
        super()
        this.state = {
            isLoading: false,
            ingredientes: [],
            ingrediente:'',
            nombre:''
        }
        this.onAddItem = this.onAddItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    /*componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },1)
        const { match: { params } } = this.props;
    }
    */
   handleChange(event){
       const value = event.target.value
       this.setState({
           ingrediente:value
       })

   }
    
   onAddItem = (event) => {
        this.setState(state =>{
            const ingredientes = [...state.ingredientes,state.ingrediente]
            
            return{
                ingredientes,
                ingrediente:'',
            }
         })
         
        event.preventDefault();
    }

    render(){
<<<<<<< HEAD
        const ingredients = this.state.ingredientes.map((ing) =>
            <Ingredients text={ing}></Ingredients>
        )
=======
        
>>>>>>> 60ef4ee66aea4f276405189575d53ee7a422f140

        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorBusqueda" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row className="contenedorIngredientes" >
                        <Col style={{borderRight:"1px solid #3EC5BD",margin:"0.5rem"}}>
                            <p className="titulo">Agregar ingredientes</p>
                            <form className="formulario">
                                <input type="text" value={this.state.nombre} placeholder="Ingrese el nombre del plato" />
                                <input type="text" value={this.state.ingrediente} onChange={this.handleChange} placeholder="Ingrese su ingrediente" />
                                <button onClick={this.onAddItem}>Agregar</button>
                            </form>
                        </Col>
                        <Col className="ingredientes" style={{margin:"0.5rem"}}>
                            <p className="titulo">Ingredientes</p>
                            <p>{ingredients}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
    }
}
