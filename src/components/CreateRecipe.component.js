import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Loading from './Loading.component'
import Ingredient from './Recipes/Ingredient.component'
import { faPlusCircle,faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CreateRecipe extends React.Component{
    constructor(){
        super()
        this.state={
            nombre:"",
            ingredientes:[],
            ingrediente:"",
            categoria:"",
            descripcion:"",
            foto:"",
            pasos:[],
            isLoading:true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.onAddItem = this.onAddItem.bind(this)
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 1000);
    }

    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
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
    handleClick(){
        this.setState({descripcion:""})
    }

    removeItem(text) {
        this.setState({
            ingredientes: this.state.ingredientes.filter(ingr => ingr !== text) // Filtra por el texto enviado por el ingrediente determinado y lo elimina del array para actualizar el estado lo que hace que se ejecute render de nuevo.
        })
    }
    render(){
        const ingredientes = this.state.ingredientes.map((ing) =>
             <Col data-aos="fade-up" lg="auto" sm="auto"> <Ingredient text={ing} method={this.removeItem}></Ingredient></Col>
        )
        return(
            this.state.isLoading ?
            <Loading />
            :
            <div>
                <div className="banner" data-aos="fade-right">
                    <Row style={{display:"flex",justifyContent:"center",alignItems:"center",letterSpacing:"1.4rem",fontSize:"3rem",color:"white",textTransform:"uppercase"}}>
                        <Col xs="12">
                        <p>Crear es compartir</p>
                        </Col> 
                    </Row>
                </div>
                <Container className="contenedorFormulario">
                    <Row style={{justifyContent:"center",margin:"0rem 1rem 0 1rem"}} data-aos="zoom-in">
                        <h1 >Es hora de crear tu propia receta</h1>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <form>
                                <label>Nombre: </label>
                                <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Ingrese nombre de la receta"></input>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                    <label>Ingredientes: </label>
                                    <button onClick={this.onAddItem}style={{border:0,backgroundColor:"white"}}><FontAwesomeIcon style={{color:"#3EC5BD"}} className="iconos"icon={faPlusCircle} size="1x"/></button>
                                </div>
                                <input type="text" name="ingrediente" value={this.state.ingrediente} onChange={this.handleChange} placeholder="Ingrese los ingredientes"></input>
                                <Row>{ingredientes}</Row>
                                <label>Descripción: </label>
                                <textarea
                                        style={{resize:"none"}}
                                        name="descripcion"
                                        rows="4"
                                        maxLength="200"
                                        onClick={this.handleClick}
                                        onChange={this.handleChange}
                                        value={this.state.descripcion}
                                        placeholder="Descripción de la receta"
                                        >
                                </textarea>
                                <button className="btn-foto"style={{width:"100%",backgroundColor:"white",border:"1px solid black"}}>
                                    <p>Agregar foto principal de la receta</p>
                                   <FontAwesomeIcon style={{color:"#3EC5BD"}} className="iconos"icon={faCamera} size="2x"/>
                                </button>
                                <label style={{marginTop:"1rem"}}>Pasos: </label>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}