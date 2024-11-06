import React, {Component} from "react";
import InputNoControlado from "./inputNoControlado";

class Entrada extends Component{
    entrada = React.createRef()

    componentDidMount(){
        this.focus()
    }

    focus = () =>{
        this.entrada.current.focus()
    }
    blur = () =>{
        this.entrada.current.blur()
    }
    render(){
        

        return(
            <div>
                <input type="text" ref={this.entrada}/>
                <button onClick={this.focus}>
                    focus
                </button>
                <button onClick={this.blur}>
                    blur
                </button>
            </div>
        )
    }
}

class Refs extends Component{
    render(){
        return(
            <div>
                <h1> React Refs 🐸</h1>
                <Entrada/>
                
            </div>
        )
    }
}

export default Refs;
