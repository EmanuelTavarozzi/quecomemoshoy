import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'
import PropTypes from 'prop-types'
const defaultimg = require('../../img/landing.jpg');

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
                        <CardImg top width="50%" style={{width:"600px",height:"300px"}}  src={this.props.img}  alt="Card image cap" />
                        <CardBody className="contenedorInfoCarta">
                            <CardTitle style={{fontSize:"1.6rem",fontWeight:"bolder"}}>{this.props.title}</CardTitle>
                            <CardText>{this.props.body}</CardText>
                        </CardBody>
                    </Card>
                </div>
        )
    }
}

About.propTypes = {
    img: PropTypes.string
}

About.defaultProps = {
    img: defaultimg
}