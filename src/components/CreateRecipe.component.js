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
            arrayVerdes:[], // Arrays a llenar con la consulta a la base
            arrayRojos:[],
            arrayAmarillos:[],
            arrayNaranjas:[],
            arrayMarrones:[],
            arrayBlancos:[],
            arrayMorados:[],
            recomendacion:"",
            isLoading:true
        }
        this.sessionManager = new sessionManager()
        this.handleChange = this.handleChange.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.removePaso = this.removePaso.bind(this)
        this.onAddIngrediente = this.onAddIngrediente.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.onAddPaso = this.onAddPaso.bind(this)
        this.keyPressed = this.keyPressed.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.callIngredientsAPI = this.callIngredientsAPI.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.sendForm = this.sendForm.bind(this)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 100);

        this.callIngredientsAPI();
    }

    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        })
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
        if(this.state.image) {
            const data = new FormData()
            data.append('image', this.state.image)
            axios({
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'https://api.imgbb.com/1/upload?key=eea05d9197d887f4d380d70fe9fcfa25',
                data
            }).then(res => {
                const imageurl = res.data.data.url;
                this.sendForm(imageurl);
            }).catch(err => {
                console.log('error', err);
                alert("Ocurrio un error. Intente nuevamente");
                this.setState({ isLoading:false })
            })
        } else {
            this.sendForm()
        }

    }

    sendForm(imageurl = ''){
        if (this.state.nombre === "" || this.state.descripcion === "") {
            alert("Por favor, ingrese todos los campos")
            this.setState({ isLoading:false })

        } else {
            axios.post("http://localhost:5000/recipes/addRecipe/", {
                name: this.state.nombre,
                description: this.state.descripcion,
                ingredients: this.state.ingredientes,
                steps: this.state.pasos,
                usermail: this.sessionManager.getUserMail(),
                imageurl,
                recomendation: this.state.recomendacion,
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
    }

    handleChangeImage(event) {
        console.log(event.target.files[0]);
        this.setState({
            image: event.target.files[0]
        })
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            this.onAddPaso()
        }
    }

    render(){
        const ingredientes = this.state.ingredientes.map((ing) =>
             <Col data-aos="fade-up" lg="auto" sm="auto"> 
                <Ingredient arrayVerdes={this.state.arrayVerdes} arrayRojos={this.state.arrayRojos}
                arrayAmarillos={this.state.arrayAmarillos} arrayMarrones={this.state.arrayMarrones}
                arrayNaranjas={this.state.arrayNaranjas} arrayBlancos={this.state.arrayBlancos}
                arrayMorados={this.state.arrayMorados}
                text={ing} method={this.removeItem}></Ingredient>
             </Col>
        )
        const pasos = this.state.pasos.map((paso,index) => 
            <Col lg="12" sm="12" className="animated fadeInDown"> <Paso paso={index + 1}text={paso} method={this.removePaso}></Paso></Col>
        )
        return(
            this.state.isLoading ?
            <Loading />
            :
            <div>
                <div className="banner" data-aos="fade-right" data-aos-once="true">
                    <Row style={{display:"flex",justifyContent:"center",alignItems:"center",letterSpacing:"1rem",fontSize:"2rem",color:"white",textTransform:"uppercase"}}>
                        <Col xs="12">
                        <p>Crear es compartir</p>
                        </Col> 
                    </Row>
                </div>
                <Container className="contenedorFormulario">
                    <Row style={{justifyContent:"center",margin:"0rem 1rem 0 1rem"}} data-aos="zoom-in" data-aos-once="true">
                        <h1>Es hora de crear tu propia receta</h1>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <form onSubmit={this.handleSubmit}>
                                <label  data-aos="fade-up" data-aos-once="true">Nombre: </label>
                                <input data-aos="fade-up" type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Ingrese nombre de la receta" data-aos-once="true"></input>
                                <div data-aos="fade-right" style={{display:"flex",justifyContent:"space-between"}} data-aos-once="true">
                                    <label>Ingredientes: </label>
                                    <button onClick={this.onAddIngrediente}style={{border:0,backgroundColor:"white"}}><FontAwesomeIcon style={{color:"#3EC5BD"}} className="iconos"icon={faPlusCircle} size="1x"/></button>
                                </div>
                                <input data-aos="fade-right" type="text" name="ingrediente" value={this.state.ingrediente} onChange={this.handleChange} placeholder="Ingrese los ingredientes" data-aos-once="true"></input>
                                <Row>{ingredientes}</Row>
                                <label data-aos="fade-left" data-aos-once="true">Descripción: </label>
                                <textarea
                                        data-aos-once="true"
                                        style={{resize:"none"}}
                                        name="descripcion"
                                        rows="4"
                                        maxLength="200"
                                        onChange={this.handleChange}
                                        value={this.state.descripcion}
                                        placeholder="Descripción de la receta"
                                        data-aos="fade-left"
                                        >
                                </textarea>
                                <label>Recomendaciones:</label>
                                <input data-aos="fade-right" data-aos-once="true" type="text" name="recomendacion" value={this.state.recomendacion} onChange={this.handleChange} placeholder="Ingrese recomendaciones para hacer la receta"></input>
                                <p data-aos="fade-up" data-aos-once="true">Foto principal de la receta</p>
                                <input data-aos="fade-up" data-aos-once="true"id="file-input" name="image" onChange={this.handleChangeImage} type="file" accept=".jpg, .jpeg, .png" />
                                <div data-aos="fade-down" data-aos-once="true">
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