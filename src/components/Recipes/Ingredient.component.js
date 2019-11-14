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
            color:"black",
            fontSize:"1.3rem"
        };
        const arrayRojos = ["Tomate"]
        const arrayVerdes = ["Lechuga"]
        if(arrayVerdes.includes(this.props.text)){
            style.backgroundColor= "green"
        }
        else if(arrayRojos.includes(this.props.text)){
            style.backgroundColor = "red"
        }
        return(
            <p onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={style}> {this.props.text} <img style={{opacity:this.state.opacity,maxWidth:"20px", maxHeight:"20px",transition: "opacity 0.2s ease"}} alt="No hay imagen"src={Cross}></img> </p>
        )
        }
}
