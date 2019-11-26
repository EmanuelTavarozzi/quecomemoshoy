import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Loading from './Loading.component'
import Ingredient from './Recipes/Ingredient.component'
import Paso from './Recipes/Paso.component'
import Footer from './Footer.component'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import sessionManager from '../services/sessionManager'

export default withRouter (class CreateRecipe extends React.Component{
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
            paso:"",
            image:"",
            isLoading:true
        }
        this.sessionManager = new sessionManager()
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.removePaso = this.removePaso.bind(this)
        this.onAddIngrediente = this.onAddIngrediente.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.onAddPaso = this.onAddPaso.bind(this)
        this.keyPressed = this.keyPressed.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 100);
    }

    handleClick() {
        this.setState({ descripcion: "" })
    }

    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        })
    }

    onAddIngrediente = (event) => {
        event.preventDefault();
       let array = this.state.ingredientes
       if(array.length === 10){
           alert("Cantidad máxima")
       }
       else if(array.includes(this.state.ingrediente)){
           alert("Ingrediente ya ingresado, ingrese otro por favor")
       }
       else if(this.state.ingrediente !== ""){
        this.setState(state =>{
            const ingredientes = [...state.ingredientes,state.ingrediente]
            
            return{
                ingredientes,
                ingrediente:'',
            }
         })
        
        }
    }
    
    removeItem(text) {
        this.setState({
            ingredientes: this.state.ingredientes.filter(ingr => ingr !== text) // Filtra por el texto enviado por el ingrediente determinado y lo elimina del array para actualizar el estado lo que hace que se ejecute render de nuevo.
        })
    }

    onAddPaso = (event) => {
        //event.preventDefault();
        const paso = this.state.paso
        
        this.setState(state => {
            const pasos = [...state.pasos, paso]

            return {
                pasos,
                paso: '',
            }
        }) 
    }

    removePaso(text) {
        this.setState({
            pasos: this.state.pasos.filter(paso => paso !== text) // Filtra por el texto enviado por el ingrediente determinado y lo elimina del array para actualizar el estado lo que hace que se ejecute render de nuevo.
        })
    }

    handleImage(){
        this.onAddPaso()
    }

    handleSubmit(event){

        event.preventDefault()
        this.setState({ isLoading:true })

        if (this.state.nombre === "" && this.state.descripcion === "") {
            alert("Por favor, ingrese todos los campos")
        } else {
            axios.post("http://localhost:5000/recipes/addRecipe/", {
                name: this.state.nombre,
                description: this.state.descripcion,
                ingredients: this.state.ingredientes,
                steps: this.state.pasos,
                usermail: this.sessionManager.getUserMail()
            })
                .then(res => {
                    console.log(res);
                    setTimeout(()=> { 
                        this.setState({isLoading:false}) 
                        this.props.history.push(`/recipe/${res.data.recipeid}`)
                         
                    },2000)
                                     
                    }

                )
        }
        // event.preventDefault()
        // alert("Submit")
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            this.onAddPaso()
        }
    }

    render(){
        const ingredientes = this.state.ingredientes.map((ing) =>
             <Col data-aos="fade-up" lg="auto" sm="auto"> <Ingredient text={ing} method={this.removeItem}></Ingredient></Col>
        )
        const pasos = this.state.pasos.map((paso,index) => 
            <Col lg="12" sm="12"> <Paso paso={index + 1}text={paso} method={this.removePaso}></Paso></Col>
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
                            <form onSubmit={this.handleSubmit}>
                                <label data-aos="fade-up">Nombre: </label>
                                <input data-aos="fade-up" type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Ingrese nombre de la receta"></input>
                                <div data-aos="fade-right" style={{display:"flex",justifyContent:"space-between"}}>
                                    <label>Ingredientes: </label>
                                    <button onClick={this.onAddIngrediente}style={{border:0,backgroundColor:"white"}}><FontAwesomeIcon style={{color:"#3EC5BD"}} className="iconos"icon={faPlusCircle} size="1x"/></button>
                                </div>
                                <input data-aos="fade-right" type="text" name="ingrediente" value={this.state.ingrediente} onChange={this.handleChange} placeholder="Ingrese los ingredientes"></input>
                                <Row>{ingredientes}</Row>
                                <label data-aos="fade-left">Descripción: </label>
                                <textarea
                                        style={{resize:"none"}}
                                        name="descripcion"
                                        rows="4"
                                        maxLength="200"
                                        onClick={this.handleClick}
                                        onChange={this.handleChange}
                                        value={this.state.descripcion}
                                        placeholder="Descripción de la receta"
                                        data-aos="fade-left"
                                        >
                                </textarea>
                                <p data-aos="fade-up">Foto principal de la receta</p>
                                <input data-aos="fade-up"id="file-input" type="file" />
                                <div data-aos="fade-down">
                                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"1rem"}}>
                                        <label>Pasos: </label>
                                    </div>
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <input type="text" name="paso" value={this.state.paso} onKeyPress={this.keyPressed}onChange={this.handleChange} placeholder="Ingrese el paso"></input>
                                        <FontAwesomeIcon onClick={this.handleImage} className="iconos btn-image"icon={faPlusCircle} size="3x"/>
                                    </div>
                                </div>
                                <Row>
                                    {pasos}
                                </Row>
                                <button type="submit" className="btn-buscar">Publicar receta</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
})