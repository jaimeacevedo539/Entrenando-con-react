import React, {Component} from "react";

class IControlado extends Component{

    state={
        text: '',
        tieneError: false,
        color: '#e8e8e8'
    }

    actualizar = (event) =>{
        const text = event.target.value
        
        let color ='green'

        if(text.trim()=== ''){
            color= '#e8e8e8'
        }

        
        if(text.trim() !== '' && text.trim().length < 3){
            color = 'red'
        }
        this.setState({text, color })

        this.props.onChange(this.props.name, text)
    }

    render(){

        const styles={
            border: `1px solid ${this.state.color}` ,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return(
            <input 
            type="text"
            value={this.state.text}
            onChange={this.actualizar}
            style={styles}
            placeholder={this.props.placeholder}
            />
        )
    }
}




class InputControlado extends Component{

    state = {
        name:'',
        email:''
    }

    actualizar=(name,text)=>{
        this.setState({
        [name]:text
        })
    }
    render(){
        return(
            <div>
                <h1>Input Controlado</h1>
                <IControlado
                onChange={this.actualizar}
                name='name'
                placeholder = 'nombre completo'
                />
                 <IControlado
                onChange={this.actualizar}
                name='email'
                placeholder = 'tu email'
                />
               <h2>Nombre:{this.state.name}</h2> 
                <h2>Email:{this.state.email}</h2>
                
            </div>
        )
    }
}

export default InputControlado;