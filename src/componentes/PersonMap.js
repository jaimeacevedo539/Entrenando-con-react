import React, {useState} from "react";
import Person from "./Person";

const PersonMap = () => {

    const [persons, serPersons] = useState([
        {
            id: 1,
            name:'Jaime',
            role: 'Desarrollador',
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: 'Andres',
            role: 'Diseñador',
            img: 'https://images.pexels.com/photos/29177086/pexels-photo-29177086/free-photo-of-hombre-feliz-disfrutando-de-la-naturaleza-junto-a-un-lago-en-buenos-aires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            name: 'Maria',
            role: 'Ingeniera',
            img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }

    ]);
    return(
        <div>
            <h1>EJERCICIO MAP</h1>
        
        <div className="container" >
            
            {persons.map((person)=>{
                return(
                    <div  key={person.id} className="person-card">
                    <Person 
                 
                    name={person.name}
                    img={person.img}
                    role={person.role}/>
                    </div>
         
                )
            })

            }

        </div>
        </div>
    )
}

export default PersonMap;