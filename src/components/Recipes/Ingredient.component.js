import React from 'react'

import Cross from '../../img/cross.png'

export default class Ingredient extends React.Component{
    constructor(){
        super()
        this.state = {
            opacity:0,
            arrayVerdes:["lechuga"], // Arrays a llenar con la consulta a la base
            arrayRojos:["tomate"],
            arrayAmarillos:["banana","choclo"],
            arrayNaranjas:["mandarina"],
            arrayMarrones:["nueces"]
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
        let style = {
            borderRadius: "60px",
            marginBottom: "1rem",
            color: "black",
            fontSize: "1.3rem",
            padding: "1rem",
            backgroundColor: "",
            textTransform: "uppercase"
        }
        let string = this.props.text
        let stringlower = string.toLowerCase()
        switch(true){
            case this.state.arrayVerdes.includes(stringlower):
                style.backgroundColor = "#33FF57"
                break
            case this.state.arrayAmarillos.includes(this.props.text):
                style.backgroundColor = "#e5e619"
                break
            case this.state.arrayRojos.includes(this.props.text):
                style.backgroundColor = "#FF4F33"
                break
            case this.state.arrayNaranjas.includes(this.props.text):
                style.backgroundColor = "#FFBD33"
                break   
            case this.state.arrayMarrones.includes(this.props.text):
                style.backgroundColor = "#C6894C"
                break
            default:
                style.backgroundColor = "#3EC5BD"
        }
        
        return(
            <p onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={style}> {this.props.text} <img key={this.props.text} onClick={() => this.props.method(this.props.text)} style={{opacity:this.state.opacity,maxWidth:"15px", maxHeight:"15px",transition: "opacity 0.2s ease"}} alt="No hay imagen"src={Cross}></img> </p>
            )
        }
}
