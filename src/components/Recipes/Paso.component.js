import React from 'react'

import Cross from '../../img/cross.png'

export default class Ingredient extends React.Component{
    constructor(){
        super()
        this.state = {
            opacity:0,
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
            fontSize: "1rem",
            padding: "1rem",
            backgroundColor: "#3EC5BD",
            textTransform: "uppercase",
            textAlign:"center",
            display:"flex",
            justifyContent:"space-between"
        }
        
        return(
            <div style={style} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <p>{this.props.paso}</p>
                <p> {this.props.text} </p>
                <img key={this.props.text} onClick={() => this.props.method(this.props.text)} style={{opacity:this.state.opacity,maxWidth:"15px", maxHeight:"15px",transition: "opacity 0.2s ease"}} alt="No hay imagen"src={Cross}></img>
            </div>
            )
        }
}
