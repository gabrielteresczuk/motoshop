import React from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return ( 
        <>
            <button className='CartWidget-button'><FontAwesomeIcon icon={faCartShopping} />  1</button>
        </>
     );
}
 
export default CartWidget;