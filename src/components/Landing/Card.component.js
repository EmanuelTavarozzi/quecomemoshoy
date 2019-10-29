import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap'

export default class About extends Component{
    constructor(){
        super()
        this.state = {
            opacity: 0
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter(){
        this.setState({
            opacity:1
        })
    }

    handleMouseLeave() {
        this.setState({
            opacity:0
        })
    }



    render(){
        return(
                <div >
                    <Card className="contenedorCarta" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <CardImg top width="100%"   src={require('../../img/landing.jpg')}  alt="Card image cap" />
                        <CardBody className="contenedorInfoCarta">
                            <CardTitle style={{fontSize:"1.6rem",fontWeight:"bolder"}}>{this.props.title}</CardTitle>
                            <CardText>{this.props.body}</CardText>
                            <Button style={{opacity:this.state.opacity,transition: "opacity 0.3s ease-in-out", backgroundColor:"#3EC5BD",border:"#4CC4BD"}}>Ver más</Button>
                        </CardBody>
                    </Card>
                </div>
        )
    }

}




// 