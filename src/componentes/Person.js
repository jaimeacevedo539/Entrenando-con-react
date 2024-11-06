import React from "react";

const Person = (props) =>{
    return(
        <div className="person-container">
       
        <img src={props.img} alt={props.name} className="person-image" />
        <h1 className="person-name">{props.name}</h1>
        <h2 className="person-role">{props.role}</h2>
    </div>
    )
}

export default Person;