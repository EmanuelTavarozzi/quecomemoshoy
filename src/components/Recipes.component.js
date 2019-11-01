import React, {Component} from 'react'
import {Container} from 'reactstrap'
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
        },1500)
    }
    
    render(){
        const styles={
            textAlign: "center", 
            fontSize: "5rem", 
            color: "#3EC5BD", 
            textTransform: "uppercase", 
            fontFamily: "Quattrocento, serif",
            marginTop:"2rem"
        }
        return(
            this.state.isLoading ?
            <LoadingPage / >
            :
            <div>
                <Container fluid= "true" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300" data-aos-offset="0">
                    <h1 style={styles}>Recetas</h1>
                </Container>
            </div>
            )
    }
}