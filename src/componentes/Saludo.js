import React,{Component} from "react";

export const Saludo = (props) => {
    if (props.saluda){
        return(
            <h1> Hola, te saludo</h1>
        )
    }

    return(
        <p>
            upps, no hay saludo
        </p>
    )
}



export const Title = (props) => {

    const styles = {
        padding: '0.3em',
        color: '#fff',
        background: 'red',
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }
    return(
        
        <h1 style={styles}>
            Jaime Acevedo
        </h1>
       
    )

}




