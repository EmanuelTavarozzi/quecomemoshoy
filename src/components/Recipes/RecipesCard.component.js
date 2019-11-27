import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//import Recipe from './Recipe.component'
//import axios from 'axios'


export default class RecipesCard extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes: [],
        }
    }

    /*callAPI() {
        axios.get("http://localhost:5000/recipes/landingRecipes", { })
        .then(res => {
            console.log(res);
            this.setState({ recipes: res.data })
        });
    }
    */
    
    /*componentDidMount() {
        this.callAPI();
    }
    */

    render(){
        return(
               <Container className="contenedorRecetaBusqueda" width="80%" data-aos="fade-down" data-aos-once={true}>
                    <Row style={{justifyContent:""}}>
                        <Col lg="8" xs="12">
                            <h2 className="tituloComida"style={{margin:0, textTransform: 'capitalize'}}> {this.props.name}</h2>
                        </Col>
                        
                    </Row>
                    <Row style={{alignItems:"center"}}>
                        <Col lg="8" xs="12">
                            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                                <p>
                                    {this.props.text}
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" xs="12">
                            <img style={{borderRadius:"2rem"}}alt="Foto de la receta"    src={require("../../img/recetas/polloalacrema.jpg")}></img>
                        </Col>    
                    </Row>
                    <Row style={{marginTop:"0.5rem"}}>  
                        <Col style={{textAlign:"right",padding:"0"}}lg="8" xs="12">
                            
                        </Col>
                         <Col lg="4" xs="12">
                            <Link to={`/recipe/${this.props.id}`} ><button className="btn-verReceta"> Ver receta </button></Link>
                        </Col> 
                    </Row>

               </Container>          
        )
    }
}

