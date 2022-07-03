import React from 'react'

function Compra({compra}) {

  return (
    <div className='compra'>

    <div className="carrito-validar__table-cont">
       <div className='compra__sub-titulo'>
            <h3>Pedido - {compra.id}</h3>
            <h4>{compra.fecha} - {compra.hora}</h4>
       </div>
           <table className="carrito__table">
               
               <thead>
                   <tr>
                   <th>IMAGEN</th>
                   <th>DESCRIPCION</th>
                   <th>CANTIDAD</th>
                   <th>TOTAL</th>
                   </tr>
               </thead>
               <tbody>
                   {
                    compra.items.map(el => 
                       <tr key={el.id}>
                            <td>
                                <div className="CartImgContainer">
                                    <img className="carrito__img" src={process.env.PUBLIC_URL +'/images/'+ el.imagenes[0] }  alt="" />
                                </div>
                            </td>
                           <td >
                               <div className="carrito__desc-cont">
                               <div className="carrito-finalizar__desc">
                               <div className="carrito__bold">{el.producto}</div>
                               <div >${parseInt(el.precio) }</div>
                               </div>
                           </div>
                           </td>
                           <td>
                                   <div>{el.quantity}</div>
                           </td>
                           <td>${el.quantity*el.precio}</td>
                       </tr>
                   )
                   }
       
               </tbody>
               
               <tfoot>
                   <tr>
                   <td colSpan={3}>Impuestos {parseFloat((compra.total-100)*0.21).toFixed( 2 )} + envio ${100}</td><td>${compra.total}</td>
                   </tr>
               </tfoot>
               
               </table>    
               </div>
    <hr/>
    </div>
  )
}

export default Compra