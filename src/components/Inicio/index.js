import React from 'react'
import { Link } from 'react-router-dom'
import './Inicio.css'
import image from '../../images/hero.jpg'

function Inicio() {
  return (
    <div className='Inicio' >
      <div className='inicio__hero' style={{ backgroundImage:`url(${image})` }}>
        <div className='inicio__hero__texto'>
          <h1>MOTO SHOP</h1>
          <p className='inicio__hero__p'>La aventura no es para todos, pero para aquellos que se comprometen con ella, no tiene fin. <br/> ¡Así que sal ahí fuera y lánzate a la aventura!</p>
           <Link to={'/Catalogo'}>
           <button className='inicio__hero__btn'>Mirar la tienda</button>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default Inicio