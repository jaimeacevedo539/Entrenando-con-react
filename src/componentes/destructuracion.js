import { useState } from "react"

const user1 ={
    name: 'jaime',
    username: 'jaimeace',
    country: 'colombia',
    social: {
        facebook: 'http:face...',
        insta: 'http:instaJAIME'
    }
}

const saluda = (user)=>{
    var {name,social:{insta}} = user
    name ='paula'

    console.log(`hola soy ${name} y vivo en ${user.country} y mi insta es ${user.social.insta}` 
        
    )
    
}

export function Conter(){
const [conter, setConter] =useState(0);
const otherConter =0;

return(
    <div>
        <h1>{otherConter}</h1>
    </div>
)
}
saluda(user1)