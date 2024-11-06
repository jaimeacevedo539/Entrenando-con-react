import React, { Component } from "react";
import './Image.css';

const images =[
    {
        author:{ 
        name:'victor',
        avatar: 'https://www.pexels.com/es-es/@victorfreitas/',
        },
        source: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        views: 10,
        id: 1

    },
    {
        author: {
            name: 'anush',
            avatar:'https://www.pexels.com/es-es/foto/hombre-fitnes-fitness-musculos-11439928/'
        },
        source:'https://images.pexels.com/photos/27856256/pexels-photo-27856256/free-photo-of-carretera-bosque-vehiculo-deporte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        views: 20,
        id: 2
    }

]

const Image = (props) =>(
    <div className="card">  <img
            src={props.image.source}  
            alt='Imagen'
            className="image"
       />
    </div>
)

class Imagenes extends Component{
    render (){
        return(
            
            <div className="images">
                <h1>Iterando Componentes</h1>
                {images.map(image=>(
                    <Image key={image.id} image= {image} />
                ))}
            </div>
        )
    }
}

export default Imagenes;