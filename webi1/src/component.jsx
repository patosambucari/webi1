import { useState } from "react"
import React from 'react'

function Component() {
    const [text, setText] = useState ()
    const [updated, setUpdated] = useState ()
    
    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = () => {
        setUpdated(text)
    }

    return (
        <div>
            <input type="text" value={text} onChange={textOnChange}></input>
            <button onClick={buttonOnClick}>Actualizar</button>
            <p>Texto Input: {text} </p>
            <p>Texto Actualizado: {updated} </p>
        </div>       
    )
}

export default Component
