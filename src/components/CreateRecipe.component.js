import React from 'react'
import {Container,Row} from 'reactstrap'
import Loading from './Loading.component'


export default class CreateRecipe extends React.Component{
    constructor(){
        super()
        this.state={
            nombre:"",
            ingredientes:[],
            categoria:"",
            descripcion:"",
            foto:"",
            pasos:[],
            isLoading:true
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 1000);
    }
    render(){
        return(
            this.state.isLoading ?
            <Loading />
            :
            <div>
                <div className="banner" data-aos="fade-right">
                    <Row style={{display:"flex",justifyContent:"center",alignItems:"center",letterSpacing:"1.4rem",fontSize:"5rem",color:"white",textTransform:"uppercase"}}>
                        <p>Crear es compartir</p>
                    </Row>
                </div>
                <Container>
                    <Row style={{justifyContent:"center"}} data-aos="zoom-in">
                        <h1 >Es hora de crear tu propia receta</h1>
                    </Row>
                    <Row>
                        <form>

                        </form>
                    </Row>
                </Container>
            </div>
        )
    }
}