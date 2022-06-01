import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import CartWidget from '../CartWidget';



export default function NavBar() {
  return (
    <nav className='NavBar-container'>
        <div className='NavBar-logo'> 
            <FontAwesomeIcon icon={faMotorcycle} className="NavBar-moto" />
            <span>MOTO</span> 
            SHOP
        </div>
        
        <ul className='NavBar-navegacion'>
            <li className='NavBar-li'>HOME</li>
            <li className='NavBar-li'>PRODUCTOS</li>
            <li className='NavBar-li'>CONTACTO</li>
        </ul>

        <div className="NavBar-carrito">
            <CartWidget/>
        </div>
    </nav>
    
  )
}


