import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {

    const [item, setItem] = useState(initial);

    const handleAdd = () =>{
        if (item < stock){
            setItem(item+1);
        }
        
    }

    const handleSubstract = () =>{
        if(item > initial){
            setItem(item-1);
        }
    }


    return ( 
        <div className='ItemCount'>
            <div>Producto</div>
            <div className='ItemCount-controls'>
                <button onClick={handleSubstract}>-</button>
                <div>{item}</div>
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                <button className='ItemCount-Agregar'>Agregar al Carrito</button>
            </div>
        </div>
     );
}
 
export default ItemCount;
