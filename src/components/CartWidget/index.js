import React, { useContext, useEffect, useState } from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = () => {

    const {customItems} = useContext(CartContext);
    const [items, setItems] = useState(0);


    useEffect(() => {
        let cantidad = 0;

        customItems.forEach(el => {
            cantidad = cantidad + el.quantity;
        });

        setItems(cantidad);

    }, [customItems]);
    

    if(customItems.length > 0){

        return ( 
            <>
                <Link to={'/Cart'} >
                <button className='CartWidget-button'><FontAwesomeIcon icon={faCartShopping} /> {items}</button>
                </Link>
            </>
        );

    }else{

        return ( 
            <>
                <button className='CartWidget-button-Disabled'><FontAwesomeIcon icon={faCartShopping} /> {items}</button>
            </>
         );

    }
}
 
export default CartWidget;