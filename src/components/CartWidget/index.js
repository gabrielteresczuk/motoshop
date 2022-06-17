import React from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({items}) => {
    return ( 
        <>
            <button className='CartWidget-button'><FontAwesomeIcon icon={faCartShopping} /> {items.length}</button>
        </>
     );
}
 
export default CartWidget;