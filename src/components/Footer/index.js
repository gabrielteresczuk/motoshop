import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className='Footer'>

       <div className='Footer-Row1'>
        <div className='Footer-Col'>
            <span>MODELOS</span>
            <ul>
                <li className='Footer-link'>Enduro</li>
                <li className='Footer-link'>Naked</li>
                <li className='Footer-link'>MX</li>
                <li className='Footer-link'>SuperSport</li>
                <li className='Footer-link'>Travel</li>
            </ul>
        </div>
        <div className='Footer-Col'>
            <span>SECCIONES</span>
            <ul>
                <li className='Footer-link'>HOME</li>
                <li className='Footer-link'>PRODUCTOS</li>
                <li className='Footer-link'>ACERCA</li>
            </ul>
        </div>
        <div className='Footer-Col'>
            <span>SUSCRIBITE</span>
            <ul>
                <li>Email</li>
                <li><input type="email" className='Footer-email'/></li>
                <li><button className='Footer-button'>Suscribirme</button></li>
                <li>Recibi todas las ofertas!</li>
            </ul>
        </div>
        </div> 
        <div className='Footer-Row2'>
            <div className='Footer-logo'> 
                <div><FontAwesomeIcon icon={faMotorcycle} className="Footer-icon1" /></div>
                <div>
                    <div>MOTOSHOP</div>
                    <div>Teresczuk Gabriel</div>
                </div>
            </div>
            <div>
            <FontAwesomeIcon icon={faTwitter} className="Footer-icon2" />
            <FontAwesomeIcon icon={faFacebookF}  className="Footer-icon2"/>
            <FontAwesomeIcon icon={faLinkedin}  className="Footer-icon2"/>
            <FontAwesomeIcon icon={faGithub} className="Footer-icon2" />
            </div>
        </div>

    </div>
  )
}

export default Footer