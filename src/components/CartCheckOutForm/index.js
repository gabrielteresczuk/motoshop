import React from 'react'

function CartCheckOutForm({customItems,total,totalFinal,impuestos,form,handleChange,handleSubmit,handleEmail,emailValid}) {
  return (
    <div className='CartCheckOutCont'>
    <div className='CartCheckOutGrid'>

      <div>

       <div className="CartCheckOutTableContainer">
       <h2>Facturacion</h2>
           <table className="CartTabla">
               
               <thead>
                   <tr>
                   <th>DESCRIPCION</th>
                   <th>CANTIDAD</th>
                   <th>TOTAL</th>
                   </tr>
               </thead>
               <tbody>
                   {
                   customItems.map(el => 
                       <tr key={el.id}>
                           <td >
                               <div className="CartDescripcionContainer">
                               <div className="CartDescripcion">
                               <div className="CartBold">{el.producto}</div>
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
               <div className='CheckOutTotal'><h4>Impuestos</h4><h4>${impuestos}</h4></div> 
               <div className='CheckOutTotal'><h4>Envio</h4><h4>$100.00</h4></div> 
               <div className='CheckOutTotal'><h2>Total a Pagar</h2><h2>${totalFinal}</h2></div>    
               </div>

      </div>


      <div >
           <form onSubmit={handleSubmit} className='FormCont'>
             <h2>Ya estas a un paso!</h2>
             <p>Completa con tus datos</p>
             <label name='nombre'>Apellido y Nombre</label>
             <input name='nombre' placeholder='Perez Juan' type='text' className='FormInput' onChange={handleChange} value={form.nombre} required/>
             <label name='email'>Email</label>
             <input name='email' placeholder='juan@perez.com' type='text' className='FormInput' onBlur={handleEmail} onChange={handleChange} value={form.email} required/>
             <label name='email2'>Confirmar Email</label>
             <input name='email2' placeholder='juan@perez.com' type='text' className={emailValid ?'FormInput':'FormInputInValid'} onBlur={handleEmail} onChange={handleChange} value={form.email2} required/>
             <label name='telefono'>Telefono</label>
             <input name='telefono' placeholder='555-112345' type='text' className='FormInput'  onChange={handleChange} value={form.telefono} required/>
             <label name='direccion'>Direccion</label>
             <input name='direccion' placeholder='Rivadavia 2023' type='text' className='FormInput' onChange={handleChange} value={form.direccion} required/>
             <div className='buttonCont'><input type="submit" className='ItemCount-Agregar' value="Terminar Compra"/></div>
           </form>
      </div>

   </div>
   </div>
  )
}

export default CartCheckOutForm