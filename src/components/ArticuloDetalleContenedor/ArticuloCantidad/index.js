import React, { useState } from 'react';
import './ArticuloCantidad.css'

const ArticuloCantidad = ({stock, inicial, handleAgregar}) => {

    const [cantidad, setCantidad] = useState(inicial);

    const handleSumar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad+1);
        }
        
    }

    const handleRestar = () =>{
        if(cantidad > inicial){
            setCantidad(cantidad-1);
        }
    }


    return ( 
        <div className='articulo-cantidad'>
            
            <div className='articulo-cantidad__controles'>
                <button onClick={handleRestar}>-</button>
                <div>{cantidad}</div>
                <button onClick={handleSumar}>+</button>
            </div>
            <div>
                <button className='articulo-cantidad__agregar' onClick={() => handleAgregar(cantidad)}>Agregar al Carrito</button>
            </div>
        </div>
     );
}
 
export default ArticuloCantidad;
