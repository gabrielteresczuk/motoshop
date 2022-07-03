import React from 'react'

function CarritoValidarForm({articulosEnCarrito,total,totalFinal,impuestos,form,handleChange,handleSubmit,handleEmail,emailValido}) {
  return (
    <div className='carrito-validar__cont'>
    <div className='carrito-validar__grid'>

      <div>

       <div className="carrito-validar__table-cont">
       <h2>Facturacion</h2>
           <table className="carrito__table">
               
               <thead>
                   <tr>
                   <th>DESCRIPCION</th>
                   <th>CANTIDAD</th>
                   <th>TOTAL</th>
                   </tr>
               </thead>
               <tbody>
                   {
                    articulosEnCarrito.map(el => 
                       <tr key={el.id}>
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
                   <td></td><td></td><td>${total}</td>
                   </tr>
               </tfoot>
               
               </table>
               <div className='carrito-validar__total'><h4>Impuestos</h4><h4>${impuestos}</h4></div> 
               <div className='carrito-validar__total'><h4>Envio</h4><h4>$100.00</h4></div> 
               <div className='carrito-validar__total'><h2>Total a Pagar</h2><h2>${totalFinal}</h2></div>    
               </div>

      </div>


      <div >
           <form onSubmit={handleSubmit} className='carrito-validar__form-cont'>
             <h2>Ya estas a un paso!</h2>
             <p>Completa con tus datos</p>
             <label name='nombre'>Apellido y Nombre</label>
             <input name='nombre' placeholder='Perez Juan' type='text' className='carrito-validar__form__input' onChange={handleChange} value={form.nombre} required/>
             <label name='email'>Email</label>
             <input name='email' placeholder='juan@perez.com' type='text' className='carrito-validar__form__input' onBlur={handleEmail} onChange={handleChange} value={form.email} required/>
             <label name='email2'>Confirmar Email</label>
             <input name='email2' placeholder='juan@perez.com' type='text' className={emailValido ?'carrito-validar__form__input':'carrito-validar__form__input--invalido'} onBlur={handleEmail} onChange={handleChange} value={form.email2} required/>
             <label name='telefono'>Telefono</label>
             <input name='telefono' placeholder='555-112345' type='text' className='carrito-validar__form__input'  onChange={handleChange} value={form.telefono} required/>
             <label name='direccion'>Direccion</label>
             <input name='direccion' placeholder='Rivadavia 2023' type='text' className='carrito-validar__form__input' onChange={handleChange} value={form.direccion} required/>
             <div className='carrito-validar__btn-cont'><input type="submit" className='articulo-cantidad__agregar' value="Terminar Compra"/></div>
           </form>
      </div>

   </div>
   </div>
  )
}

export default CarritoValidarForm