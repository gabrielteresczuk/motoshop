import React from 'react'
import './NoMatch.css'
import image from '../../images/404.jpg'



function NoMatch() {
  return (
    <div className='NoMatch' style={{ backgroundImage:`url(${image})` }}>
        <h1>404</h1>
        <h3>RUTA NO ENCONTRADA !</h3>
        <p>Esta ruta no existe o no se encuentra disponible</p>
    </div>
  )
}

export default NoMatch