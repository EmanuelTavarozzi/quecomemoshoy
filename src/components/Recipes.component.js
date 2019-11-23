import React, {Component} from 'react'
import {Container,Col,Row,Spinner} from 'reactstrap'
import {Link } from 'react-scroll'
import LoadingPage from './Loading.component'
import Ingredient from './Recipes/Ingredient.component'
import RecipesCard from './Recipes/RecipesCard.component'

export default class Recipes extends Component{
constructor(){
        super()
        this.state = {
            isLoading: true,
            isLoadingResultados: false,
            ingredientes: [], // Para hacer la consulta hay que tomar los ingredientes desde acá y buscar en la colección.
            ingrediente:'',
            nombre:'',
            recipes: [], // Array para llenar con recetas provenientes de la búsqueda
            argumentsReady: false
        }
        this.onAddItem = this.onAddItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.buscarRecetas = this.buscarRecetas.bind(this)
        
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },500)
    }
    
   handleChange(event){
       const value = event.target.value
       const nombre = event.target.name
       this.setState({
           [nombre]:value
       })

   }
    
   onAddItem = (event) => {
       let array = this.state.ingredientes
       if(array.length === 10){
           alert("Cantidad máxima")
       }
       else if(array.includes(this.state.ingrediente)){
           alert("Ingrediente ya ingresado, ingrese otro por favor")
       }
       else if(this.state.ingrediente === "") {
           alert("Ingrese el campo por favor")
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

    removeItem(text) {
        this.setState({
            ingredientes: this.state.ingredientes.filter(ingr => ingr !== text) // Filtra por el texto enviado por el ingrediente determinado y lo elimina del array para actualizar el estado lo que hace que se ejecute render de nuevo.
        })
    }

    buscarRecetas(event){
        
            this.setState({
                isLoadingResultados:true
            })
            setTimeout(() => {
                this.setState({isLoadingResultados:false})
            },3000)
        
    }
    
    

    render(){
        let ingredients = this.state.ingredientes.map((ing) =>
            <Col data-aos="fade-down" lg="auto" sm="auto"> <Ingredient text={ing} method={this.removeItem}></Ingredient></Col>   
        )
        
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorBusqueda" fluid="true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row className="contenedorIngredientes">
                        <Col className="borde">
                            <p className="titulo">Agregar ingredientes</p>
                            <form className="formulario">
                                <label><input type="text" style={{textTransform:"uppercase"}} name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Ingrese el nombre del plato" /></label>
                                <label><input type="text" style={{textTransform:"uppercase"}} name="ingrediente" value={this.state.ingrediente} onChange={this.handleChange} placeholder="Ingrese su ingrediente (max 10)" /></label>
                                <button onClick={this.onAddItem}>Agregar</button>
                            </form>
                        </Col>
                        <Col className="ingredientes" style={{margin:"0.5rem"}}>
                            <p className="titulo">Ingredientes</p>
                            <Row>
                                {ingredients}
                            </Row>
                        </Col>
                    </Row>
                    <Row className="contenedorIngredientes">
                        <Link to="contenedorResultados" smooth={true} duration={1200} offset={-50}><button disabled={this.state.ingredientes.length === 0} onClick={this.buscarRecetas}class="btn-buscar">Buscar Receta</button></Link>
                    </Row>
                </Container>
                <h1 id="contenedorResultados"style={{textAlign:"center",margin:"4rem 0 2rem 0",fontSize:"4rem"}}>Hoy comemos...</h1>
                

                
                {this.state.isLoadingResultados ? 
            
                <Container style={{display:"flex",alignItems:"center" , justifyContent:"center",height:"800px"}}>
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" color="info" />
                </Container>
                
                :
                <Container className="contenedorBusquedaRecetas">
                    < RecipesCard name = "Ensalada de atún"
                    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan ullamcorper posuere. Morbi sit amet imperdiet quam, in gravida sapien. Curabitur mattis nisl sed elit ullamcorper, vel convallis ipsum dapibus. Ut fringilla neque et congue suscipit. Sed quis varius leo. Vivamus in nisi sed velit volutpat efficitur et id mauris. Aenean sit amet lectus ipsum. Nulla a ligula sit amet nisi finibus ornare lobortis vel mi. Duis faucibus mollis tortor sit amet eleifend. Phasellus facilisis eros eros, non rhoncus ex mattis ut. Vivamus sit amet elementum purus, eget luctus tortor. Proin tempor laoreet felis, at pharetra ipsum aliquet quis. Suspendisse et elit et tortor tristique r" id = "1" isVegan = { false} isTacc = { true}
                    />
                    < RecipesCard name = "Ensalada de atún"
                    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan ullamcorper posuere. Morbi sit amet imperdiet quam, in gravida sapien. Curabitur mattis nisl sed elit ullamcorper, vel convallis ipsum dapibus. Ut fringilla neque et congue suscipit. Sed quis varius leo. Vivamus in nisi sed velit volutpat efficitur et id mauris. Aenean sit amet lectus ipsum. Nulla a ligula sit amet nisi finibus ornare lobortis vel mi. Duis faucibus mollis tortor sit amet eleifend. Phasellus facilisis eros eros, non rhoncus ex mattis ut. Vivamus sit amet elementum purus, eget luctus tortor. Proin tempor laoreet felis, at pharetra ipsum aliquet quis. Suspendisse et elit et tortor tristique r" id = "1" isVegan = { true} isTacc = { false}
                    />
                </Container>
                }
            </div>
            )
    }
}
