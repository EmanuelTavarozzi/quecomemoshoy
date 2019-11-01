import React from 'react'
import {Spinner} from 'reactstrap'

function Loading(){
    return(
        <div style={{display:"flex",alignItems:"center",height:"90vh",width:"90vw",justifyContent:"center",margin:"0 auto"}}>
            <h1>
                <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" color="info"/>
            </h1>
        </div>
    )
}

export default Loading