import React from 'react'
import {Col} from 'reactstrap'

function Ingredient(props){
    let style={
        backgroundColor:"",
        borderRadius:"60px",
        padding:"0.5rem 0 0.5rem 0",
        color:"white"
    };
    const arrayRojos = ["Tomate"]
    const arrayVerdes = ["Lechuga"]
    if(arrayVerdes.includes(props.text)){
        style.backgroundColor= "green"
    }
    else if(arrayRojos.includes(props.text)){
        style.backgroundColor = "red"
    }
    return(
       <Col><p style={style}>{props.text}</p></Col>
    )
}

export default Ingredient