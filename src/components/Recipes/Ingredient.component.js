import React from 'react'
import Cross from '../../img/cross.png'

export default class Ingredient extends React.Component{
    constructor(){
        super()
        this.state = {
            opacity:0,
        };
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
            textTransform: "uppercase",
            textAlign:"center",
            border: "1px solid black",
            cursor: "pointer"
        }
        let string = this.props.text
        let stringlower = string.toLowerCase()
        switch(true){
            case this.props.arrayVerdes.includes(stringlower):
                style.backgroundColor = "#33FF57"
                break
            case this.props.arrayBlancos.includes(stringlower):
                style.backgroundColor = "#FFFFFF"
                break
            case this.props.arrayMorados.includes(stringlower):
                style.backgroundColor = "#803790"
                break
            case this.props.arrayAmarillos.includes(stringlower):
                style.backgroundColor = "#e5e619"
                break
            case this.props.arrayRojos.includes(stringlower):
                style.backgroundColor = "#FF4F33"
                break
            case this.props.arrayNaranjas.includes(stringlower):
                style.backgroundColor = "#FFBD33"
                break   
            case this.props.arrayMarrones.includes(stringlower):
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


Ingredient.defaultProps = {
    arrayVerdes:[], // Arrays a llenar con la consulta a la base
    arrayRojos:[],
    arrayAmarillos:[],
    arrayNaranjas:[],
    arrayMarrones:[],
    arrayBlancos:[],
    arrayMorados:[]
};