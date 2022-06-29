import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';


function CartItem({item}) {

    const {removeCustomItem,addCustomQuantity,restarCustomQuantity} = useContext(CartContext);

  return (
    <tr>
    <td>
        <div className="CartImgContainer">
            <img className="CartImg" src={process.env.PUBLIC_URL +'/images/'+ item.imagenes[0] }  alt="" />
        </div>
    </td>
    <td >
        <div className="CartDescripcionContainer">
        <div className="CartDescripcion">
          <div className="CartBold">{item.producto}</div>
          <div >${parseInt(item.precio) }</div>
        </div>
    </div>
    </td>
    <td>
        <div className='CartItemCountControls'>
            <button onClick={()=>restarCustomQuantity(item,item.quantity)}>-</button>
            <div>{item.quantity}</div>
            <button onClick={()=>addCustomQuantity(item,item.quantity)}>+</button>
        </div>
    </td>
    <td>${item.quantity*item.precio}</td>
    <th>
      <button className="CartDeleteButton" onClick={() => removeCustomItem(item)}>
      <FontAwesomeIcon icon={faTrashCan}/>
      </button>
    </th>
  </tr>
  )
}

export default CartItem