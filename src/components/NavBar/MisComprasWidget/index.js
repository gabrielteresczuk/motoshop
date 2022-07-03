import React from 'react'
import './MisComprasWidget.css'
import { Link } from "react-router-dom";


function MisComprasWidget({misCompras}) {
    return (
        <div className='mis-compras-widget__cont'>
        {misCompras.length >0?
          <Link to={"/MisCompras"}>
            
            <div className='mis-compras-widget'>
              
                <span className='mis-compras-widget__texto'> MIS</span>
                <span className='mis-compras-widget__texto'>COMPRAS</span>
        
            </div>
             
          </Link>
          : ''
        } 
        </div>
      );
}

export default MisComprasWidget