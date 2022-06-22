import React, { useContext } from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = ({items}) => {

    const {customItems} = useContext(CartContext);

    if(customItems.length > 0){

        return ( 
            <>
                <Link to={'/Cart'} >
                <button className='CartWidget-button'><FontAwesomeIcon icon={faCartShopping} /> {items.length}</button>
                </Link>
            </>
        );

    }else{

        return ( 
            <>
                <button className='CartWidget-button-Disabled'><FontAwesomeIcon icon={faCartShopping} /> {items.length}</button>
            </>
         );

    }
}
 
export default CartWidget;