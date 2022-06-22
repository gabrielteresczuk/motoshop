import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem'
import {dataDB} from '../../assets/dataBase'
import { Link } from 'react-router-dom'


function Cart() {

  const {customItems,clearCustomItem} = useContext(CartContext);

  console.log(customItems);

  let nuevo = '';
  let nuevosItems = [];
  let total = 0;

  //Por cada item del CONTEXT, buscamos los datos de la base
  customItems.forEach(el => {
    nuevo = {...dataDB.find(ele => ele.id === el.item),cantidad:el.quantity};
    nuevosItems = [...nuevosItems, nuevo];
    total = total + (parseInt(nuevo.precio) * el.quantity);
  });

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
              nuevosItems.map(el => 
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
            <button className='ItemCount-Agregar'>Terminar Compra</button>
      </div>
      </div>

    )
  }else{
    return (

      <div className='Cart'>
      <div className='CartTitulo'><h1>Carrito</h1></div>
      <div>No se encuentran Productos en el Carrito</div>
      
      
      <div className='CartComprar'><Link to={'/Lista'}><button className='ItemCount-Agregar'>Realizar Compras</button></Link></div>
      </div>
    );
  }



}

export default Cart