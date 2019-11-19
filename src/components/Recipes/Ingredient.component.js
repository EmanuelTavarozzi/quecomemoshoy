import React from 'react'

import Cross from '../../img/cross.png'

export default class Ingredient extends React.Component{
    constructor(){
        super()
        this.state = {
            opacity:0,
            style: {
                borderRadius: "60px",
                marginBottom: "1rem",
                color: "black",
                fontSize: "1.3rem",
                padding: "1rem"
            },
            backgroundColor:""
            
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.getRandomColor = this.getRandomColor.bind(this)   
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

    componentDidMount(){
        let color = this.getRandomColor()
        this.setState({
            backgroundColor:color
        })
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;

    }
    render(){
        
        return(
            <p onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{backgroundColor: this.state.backgroundColor}}> {this.props.text} <img key={this.props.text} onClick={() => this.props.method(this.props.text)} style={{opacity:this.state.opacity,maxWidth:"15px", maxHeight:"15px",transition: "opacity 0.2s ease"}} alt="No hay imagen"src={Cross}></img> </p>
        )
        }
}
