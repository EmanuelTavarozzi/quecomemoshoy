import React from 'react'
import {Row,Col} from 'reactstrap'
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
            fontSize: "1.3rem",
            padding: "1rem",
            backgroundColor: "#3EC5BD",
            textTransform: "uppercase",
            textAlign:"center",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }
        
        return(
            <Row style={style} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <Col lg="3" xs="3">
                    <p style={{margin:0}}>{this.props.paso}</p>
                </Col>
                <Col lg="6" xs="6">
                    <p style={{margin:0,display:"block",wordBreak:"break-word"}}> {this.props.text}</p>
                </Col>
                <Col lg="3" xs="3">
                    <img key={this.props.text} onClick={() => this.props.method(this.props.text)} style={{opacity:this.state.opacity,maxWidth:"25px", maxHeight:"25px",transition: "opacity 0.2s ease"}} alt="No hay imagen"src={Cross}></img>
                </Col>
            </Row>
            )
        }
}
