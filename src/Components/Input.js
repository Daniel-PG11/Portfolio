import React from 'react'

import '../Css/contact.css';


function Input({type,placeholder,name}) {
    return (
        <div>
            {type == "textarea" ? 
                <textarea className= "input textarea" name={name} placeholder={placeholder}/>
                :
                <input className= "input text"
                type= {type} name={name} placeholder={placeholder} />
        }

        </div>
    )
}

export default Input
