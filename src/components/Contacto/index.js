import React from 'react'
import './Contacto.css'
import image from '../../images/contacto.jpg'

function Contacto() {
  return (
    <div className='Contacto_container' style={{ backgroundImage:`url(${image})` }}>
        <div className='Contacto_formContainer'>
            <form className='Contacto_form'>
                <h2>Contacto</h2>
                <p>Enviamos tu consulta por este medio</p>
                <label htmlFor='email' className='Contacto_subtexto' name="email" >Email:</label>
                <input type="email" id="email" className='Contacto_input' placeholder='correo electronico'/>
                <label htmlFor='textarea' className='Contacto_subtexto'>Mensaje:</label>
                <textarea id="textarea" className='Contacto_input' name="textarea" rows="10" cols="50" placeholder='Envianos tu consulta'/>
                <input type="submit" className='Contacto_sumbit' value="enviar"/>
                <p className='Contacto_subtexto'>Todas las consultas son importantes</p>
            </form>
        </div>
    </div>
  )
}

export default Contacto