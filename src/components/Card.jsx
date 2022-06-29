import React from 'react'
import { Foto } from './Foto'
import { Bottom } from './Bottom'
import back from "../images/Rectangle 1.png"

function Card() {
    return (
        <div className='content-card'>
            <img src={back} alt="Fondo de perfil" />
            <Foto/>
            <Bottom/>
        </div>
    )
}

export {Card}