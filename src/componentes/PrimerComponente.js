import { useState } from "react"
import React from 'react'



export const PrimerComponente = () => {



    const [nombre, setNombre] = useState("Jaime");

    let hobbies = [
        'futbol',
        'gym',
        'correr'
    ]

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    return (
        <div>
            
            <h1>Primer Componente</h1>
            <p>Mi nombre es:<strong className={nombre.length >= 6 ? 'verde' : 'rojo'}> {nombre}</strong> </p>

            <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="cambia el nombre" />

            <button onClick={e => {
                console.log("el valor del estado es: ", nombre);
            }}>
                Mostrar valor
            </button>

            <button onClick={e => cambiarNombre("Jaime Acevedo")}>
                Cambiar Nombre
            </button>

            <h2>Hobbies:</h2>
            <ul>
                {
                    hobbies.map((hobbies, indice) => {
                        return (<li key={indice}>
                            {hobbies}
                        </li>);
                    })
                }
            </ul>

        </div>


    )
}

export const Contador = () => {
    const [conter, setConter] = useState(0);
  
    return (
      <div>
        <h1>{conter}</h1>
        <button onClick={() => setConter(conter + 1)}>sumar clicks</button>
        <button onClick={() => setConter(conter - 1)}>restar clicks</button>
       
      </div>
    );
  };