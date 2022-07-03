import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>

       <div className='footer__fila'>
        <div className='footer__col'>
            <span>MODELOS</span>
            <ul>
                <li className='footer__link'><Link to={'/Catalogo/todos'}>Todos</Link></li>
                <li className='footer__link'><Link to={'/Catalogo/Enduro'}>Enduro</Link></li>
                <li className='footer__link'><Link to={'/Catalogo/Naked'}>Naked</Link></li>
                <li className='footer__link'><Link to={'/Catalogo/MX'}>MX</Link></li>
                <li className='footer__link'><Link to={'/Catalogo/SuperSport'}>SuperSport</Link></li>
                <li className='footer__link'><Link to={'/Catalogo/Adventure'}>Adventure</Link></li>
            </ul>
        </div>
        <div className='footer__col'>
            <span>SECCIONES</span>
            <ul>
            <li className='footer__link'><Link to={'/'}>HOME</Link></li>
                <li className='footer__link'><Link to={'/Catalogo'}>PRODUCTOS</Link></li>
                <li className='footer__link'><Link to={'/Contacto'}>CONTACTO</Link></li>
            </ul>
        </div>
        <div className='footer__col'>
            <span>SUSCRIBITE</span>
            <ul>
                <li>Email</li>
                <li><input type="email" className='footer__email'/></li>
                <li><button className='footer__btn'>Suscribirme</button></li>
                <li>Recibi todas las ofertas!</li>
            </ul>
        </div>
        </div> 
        <div className='footer__fila-2'>
            <div className='footer__logo'> 
                <div><FontAwesomeIcon icon={faMotorcycle} className="footer__icono-1" /></div>
                <div>
                    <div>MOTOSHOP</div>
                    <div>Teresczuk Gabriel</div>
                </div>
            </div>
            <div>
            <FontAwesomeIcon icon={faTwitter} className="footer__icono-2" />
            <FontAwesomeIcon icon={faFacebookF}  className="footer__icono-2"/>
            <FontAwesomeIcon icon={faLinkedin}  className="footer__icono-2"/>
            <FontAwesomeIcon icon={faGithub} className="footer__icono-2" />
            </div>
        </div>

    </div>
  )
}

export default Footer