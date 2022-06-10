import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import image from '../../images/hero.jpg'

function Home() {
  return (
    <div className='Home' >
      <div className='Home_hero' style={{ backgroundImage:`url(${image})` }}>
        <div className='Home_heroText'>
          <h1>MOTO SHOP</h1>
          <p className='Home_heroP'>La aventura no es para todos, pero para aquellos que se comprometen con ella, no tiene fin. <br/> ¡Así que sal ahí fuera y lánzate a la aventura!</p>
           <Link to={'/Lista'}>
           <button className='Home_heroButton'>Mirar la tienda</button>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default Home