import React from 'react'
import "../styles/Bottom.css"
import loguno from "../images/Vector.png"
import logdos from "../images/Vector (1).png"

function Bottom() {
  return (
    <div className='bottom'>
      <h1 className='tuno'>Yarriba Castro</h1>
      <h2 className='tdos'>Design Track</h2>
      <span className='descrip'>I chose design track because I love to design beautiful user-centered interfaces.</span>
      <div className='links'>
        <div>
          <img src={loguno} alt="Logo in" />
          <span> Yaretas24</span>
        </div>
        <div>
        <img src={logdos} alt="Logo insta" />
          <span> Yaretas24</span>
        </div>
      </div>
    </div>
  )
}

export {Bottom}