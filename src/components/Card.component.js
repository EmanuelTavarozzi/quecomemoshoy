import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap'

export default class About extends Component{

    render(){
        return(
                <div>
                    <Card className="contenedorCarta">
                        <CardImg top width="100%"   src={require('../img/landing.jpg')}  alt="Card image cap" />
                        <CardBody className="contenedorInfoCarta">
                            <CardTitle>Comida saludable</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Ver más</Button>
                        </CardBody>
                    </Card>
                </div>
        )
    }

}




// 