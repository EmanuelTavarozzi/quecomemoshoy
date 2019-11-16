import React from 'react'

import Cross from '../../img/cross.png'

export default class Ingredient extends React.Component{
    constructor(){
        super()
        this.state = {
            opacity:0
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        
    }

    handleMouseEnter(){
        this.setState({
            opacity:1
        })
    }
    handleMouseLeave(){
        this.setState({
            opacity:0
        })
    }

    
    
    render(){
        let style={
            backgroundColor:"",
            borderRadius:"60px",
            marginBottom:"1rem",
            color:"white",
            fontSize:"1.3rem",
            padding:"1rem"
        };
        const arrayRojos = ["Tomate"] /* Pensar si hacerlo con una consulta y llenar el state o de otra manera */
        const arrayVerdes = ["Lechuga"]
        if(arrayVerdes.includes(this.props.text)){
            style.backgroundColor= "green"
        }
        else if(arrayRojos.includes(this.props.text)){
            style.backgroundColor = "red"
        }
        return(
            <p onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={style}> {this.props.text} <img key={this.props.text} onClick={() => this.props.method(this.props.text)} style={{opacity:this.state.opacity,maxWidth:"15px", maxHeight:"15px",transition: "opacity 0.2s ease"}} alt="No hay imagen"src={Cross}></img> </p>
        )
        }
}
