import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {CarritoContext } from '../../../context/CarritoContext';


function CarritoFila({articulo}) {

  const {removerArticuloEnCarrito,sumarCantidadEnCarrito,restarCantidadEnCarrito} = useContext(CarritoContext);

  return (
    <tr>
    <td>
        <div className="CartImgContainer">
            <img className="carrito__img" src={process.env.PUBLIC_URL +'/images/'+ articulo.imagenes[0] }  alt="" />
        </div>
    </td>
    <td >
        <div className="carrito__desc-cont">
        <div className="carrito__desc">
          <div className="carrito__bold">{articulo.producto}</div>
          <div >${parseInt(articulo.precio) }</div>
        </div>
    </div>
    </td>
    <td>
        <div className='carrito-fila__controles'>
            <button onClick={()=>restarCantidadEnCarrito(articulo,articulo.quantity)}>-</button>
            <div>{articulo.quantity}</div>
            <button onClick={()=>sumarCantidadEnCarrito(articulo,articulo.quantity)}>+</button>
        </div>
    </td>
    <td>${articulo.quantity*articulo.precio}</td>
    <th>
      <button className="carrito__btn-borrar" onClick={() => removerArticuloEnCarrito(articulo)}>
      <FontAwesomeIcon icon={faTrashCan}/>
      </button>
    </th>
  </tr>
  )
}

export default CarritoFila