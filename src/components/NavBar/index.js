import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';



export default function NavBar() {
  return (

    <nav className='NavBar-container'>
        
        
        <div className='NavBar-logo'> 
          <Link to={'/'}>
            <FontAwesomeIcon icon={faMotorcycle} className="NavBar-moto" />
            <span>MOTO</span> 
            SHOP
          </Link>
        </div>
       
        
        <ul className='NavBar-navegacion'>
            <li className='NavBar-li'><NavLink to={'/'}>HOME</NavLink></li>
            <li className='NavBar-li'><NavLink to={'/Lista'}>PRODUCTOS</NavLink></li>
            <li className='NavBar-li'><NavLink to={'/Contacto'}>CONTACTO</NavLink></li>
        </ul>

        <div className="NavBar-carrito">
            <CartWidget/>
        </div>
    </nav>


  )
}


