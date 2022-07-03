import React from 'react'
import './Contacto.css'
import image from '../../images/contacto.jpg'


function Contacto() {

  return (
    <div className='contacto__contenedor' style={{ backgroundImage:`url(${image})` }}>
        <div className='contacto__form-cont'>
            <form className='contacto__form'>
                <h2>Contacto</h2>
                <p>Enviamos tu consulta por este medio</p>
                <label htmlFor='email' className='contacto__sub-texto' name="email" >Email:</label>
                <input type="email" id="email" className='contacto__input' placeholder='correo electronico'/>
                <label htmlFor='textarea' className='contacto__sub-texto'>Mensaje:</label>
                <textarea id="textarea" className='contacto__input' name="textarea" rows="10" cols="50" placeholder='Envianos tu consulta'/>
                <input type="submit" className='contacto__submit' value="enviar"/>
                <p className='contacto__sub-texto'>Todas las consultas son importantes</p>
            </form>
        </div>
    </div>
  )
}

export default Contacto