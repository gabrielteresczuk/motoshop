import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'


function Cart() {

  const {customItems,clearCustomItem} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    let totalEffect = 0;
    customItems.forEach(el => {
      totalEffect = totalEffect + (parseInt(el.precio) * el.quantity);
    });
    setTotal(totalEffect);

  }, [total,customItems]);


  if(customItems.length >0){

    return (

      <div className='Cart'>
      <div className='CartTitulo'><h1>Carrito</h1></div>
      
      <div className="CartTableContainer">
      <table className="CartTabla">
          
          <thead>
            <tr>
              <th>IMAGEN</th>
              <th>DESCRIPCION</th>
              <th>CANTIDAD</th>
              <th>TOTAL</th>
              <th>ACCION</th>
            </tr>
          </thead>
          <tbody>


            {
              customItems.map(el => 
                  <CartItem key={el.id} item={el}/>
              )
            }
  
          </tbody>
          
          <tfoot>
              <tr>
              <td></td><td></td><td></td><td>${total}</td><td></td>
              </tr>
          </tfoot>
          
        </table>
        </div>

        <div className='CartTerminar'>
            <button className='CartLimparButton' onClick={clearCustomItem}>Limpiar Carrito</button>
            <Link to={'/Cart/ChekOut'}><button className='ItemCount-Agregar'>Terminar Compra</button></Link>
      </div>
      </div>

    )
  }else{
    return (

      <div className='Cart'>
      <div className='CartTitulo'><h1>Carrito</h1></div>
      <div>No se encuentran Productos en el Carrito</div>
      
      
      <div className='CartComprar'><Link to={'/Lista/todos'}><button className='ItemCount-Agregar'>Realizar Compras</button></Link></div>
      </div>
    );
  }



}

export default Cart