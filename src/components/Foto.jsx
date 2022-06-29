import React from 'react'
import foto from "../images/Ellipse 1.png"
import "../styles/Foto.css"

function Foto() {
    return (
        <div className='foto'>
            <img src={foto} alt="Foto de perfil" />
        </div>
    )
}

export {Foto}