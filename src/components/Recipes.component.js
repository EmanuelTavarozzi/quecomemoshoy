import React, {Component} from 'react'
import {Container,Col,Row,Spinner} from 'reactstrap'
import * as Scroll from 'react-scroll';
import LoadingPage from './Loading.component'
import Ingredient from './Recipes/Ingredient.component'
import RecipesCard from './Recipes/RecipesCard.component'
import axios from 'axios'
const scroll = Scroll.animateScroll;

export default class Recipes extends Component{
constructor(){
        super()
        this.state = {
            isLoading: true,
            isLoadingResultados: false,
            existSearch: false,
            ingredientes: [], // Para hacer la consulta hay que tomar los ingredientes desde acá y buscar en la colección.
            ingrediente:'',
            nombre:'',
            recipes: [], // Array para llenar con recetas provenientes de la búsqueda
            argumentsReady: false,
            arrayVerdes:[], // Arrays a llenar con la consulta a la base
            arrayRojos:[],
            arrayAmarillos:[],
            arrayNaranjas:[],
            arrayMarrones:[],
            arrayBlancos:[],
            arrayMorados:[]
        }
        this.onAddItem = this.onAddItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.buscarRecetas = this.buscarRecetas.bind(this)
        this.handleKeyPressed = this.handleKeyPressed.bind(this)
        this.callIngredientsAPI = this.callIngredientsAPI.bind(this)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false})
        },500);
        this.callIngredientsAPI();
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
    }

    handleKeyPressed(event) {
        const nombre = event.target.name
        if(event.key === 'Enter') {
            if(nombre === 'nombre') {
                if(this.state.nombre !== '') {
                    this.buscarRecetas()
                }
            } else {
                this.onAddItem(event)
            }
        }
    }

    removeItem(text) {
        this.setState({
            ingredientes: this.state.ingredientes.filter(ingr => ingr !== text) // Filtra por el texto enviado por el ingrediente determinado y lo elimina del array para actualizar el estado lo que hace que se ejecute render de nuevo.
        })
    }

    buscarRecetas(event){
            this.setState({
                isLoadingResultados:true,
                existSearch: true
            })
            scroll.scrollTo(document.getElementById('contenedorResultados').offsetTop);
            axios.post("http://localhost:5000/recipes/searchRecipe/", {name:this.state.nombre,ingredients:this.state.ingredientes})
            .then(res => {
                console.log(res);
                setTimeout(()=> {
                    this.setState({isLoadingResultados:false, recipes: res.data})
                }, 2000
                )
                // verificar catcheo de error
            });
            
        
    }
    
    callIngredientsAPI() {
        axios.get("http://localhost:5000/ingredient/getIngredients")
        .then((res => {
            console.log(res.data);
            this.setState({
                arrayAmarillos: res.data.amarillos,
                arrayMarrones: res.data.marrones,
                arrayNaranjas: res.data.naranjas,
                arrayRojos: res.data.rojos,
                arrayVerdes: res.data.verdes,
                arrayBlancos: res.data.blancos,
                arrayMorados: res.data.morados,
            })
        }))
    }

    render(){
        let ingredients = this.state.ingredientes.map((ing) =>
            <Col data-aos="fade-down" lg="auto" sm="auto"> 
                <Ingredient arrayVerdes={this.state.arrayVerdes} arrayRojos={this.state.arrayRojos}
                arrayAmarillos={this.state.arrayAmarillos} arrayMarrones={this.state.arrayMarrones}
                arrayNaranjas={this.state.arrayNaranjas} arrayBlancos={this.state.arrayBlancos}
                arrayMorados={this.state.arrayMorados}
                 text={ing} method={this.removeItem}></Ingredient>
            </Col>   
        )
        
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container className="contenedorBusqueda" fluid={true} data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <Row className="contenedorIngredientes">
                        <Col className="borde">
                            <p className="titulo">Agregar ingredientes</p>
                            <form className="formulario">
                                <label><input type="text" style={{textTransform:"uppercase"}} name="nombre" value={this.state.nombre} onChange={this.handleChange} onKeyPress={this.handleKeyPressed} placeholder="Ingrese el nombre del plato" /></label>
                                <label><input type="text" style={{textTransform:"uppercase"}} name="ingrediente" value={this.state.ingrediente} onChange={this.handleChange} onKeyPress={this.handleKeyPressed} placeholder="Ingrese su ingrediente (max 10)" /></label>
                                <button type="button" onClick={this.onAddItem}>Agregar</button>
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
                        <button style={{width:"auto"}}disabled={!this.state.nombre && this.state.ingredientes.length === 0} onClick={this.buscarRecetas} className="btn-buscar">Buscar Receta</button>
                    </Row>
                </Container>
                
                <div id="contenedorResultados">
                { this.state.isLoadingResultados ? 

                <React.Fragment>
                <h1 style={{textAlign:"center",margin:"4rem 0 2rem 0",fontSize:"4rem"}}>Hoy comemos...</h1>
                
                <Container style={{display:"flex",alignItems:"center" , justifyContent:"center",height:"800px"}}>
                    <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" color="info" />
                </Container>           
                
                </React.Fragment>

                : this.state.recipes.length ?
                <React.Fragment>
                <h1 style={{textAlign:"center",margin:"4rem 0 2rem 0",fontSize:"4rem"}}>Hoy comemos...</h1>
                <Container className="contenedorBusquedaRecetas">
                    {this.state.recipes.map((recipe, index) =>
                    < RecipesCard key={index} name={recipe.name} image={recipe.imageurl}
                    text={recipe.description} id={recipe._id} 
                    />
                    )}                       
                </Container>
                </React.Fragment>
                : 
                <React.Fragment>
                {this.state.existSearch && 
                <h4 style={{textAlign:"center",color:"red", marginTop:"4rem", marginBottom:"4rem"}}>No hay resultados para su busqueda</h4> 
                    }  
                </React.Fragment>            
                }
            </div>
            </div>
            )
    }
}
