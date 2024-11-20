import React, {Component} from "react";

const Header= () =>{
    const subtitleStyles ={
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px'
    }

    return (
        <header style={headerStyles}>
            <div>
                Comunicacion entre componentes
            </div>
            <div style={subtitleStyles}>
                Metodos de instancia
                <span role='image' aria= 'flame'>
                    🚗
                </span>
            </div>
        </header>
    )
}

class Hijo extends Component{

    state = {
        message: '****'
    }

    dispatchAlert=(e,message = 'Alert desde el hijo') =>{
        alert(message)
        this.setState({message})
    }
    render (){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.dispatchAlert}>
                    Hijo
                </button>
            </div>
        )
    }
}

class ComunicacionConInstancia extends Component{
    hijo = React.createRef()

    handleClick = () => {
        this.hijo.current.dispatchAlert(null,'Alert desde el padre')
    }

    render(){
        return(
            <div>
                <Header/>
                <Hijo ref={this.hijo}/>
                <button onClick={this.handleClick}>
                    Padre
                </button>
            </div>
        )
    }
}

export default ComunicacionConInstancia;