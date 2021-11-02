import React from 'react'

import '../Css/contact.css';


function Input({type,placeholder}) {
    return (
        <div>
            {type == "textarea" ? 
                <textarea className= "input textarea" placeholder={placeholder}/>
                :
                <input className= "input text"
                type= {type} placeholder={placeholder} />
        }

        </div>
    )
}

export default Input
