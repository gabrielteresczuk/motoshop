import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartCheckOut.css'
import {collection, getFirestore, addDoc} from 'firebase/firestore'
import CartCheckOutForm from '../CartCheckOutForm';
import Loader from '../Loader';

const initialForm = {
  nombre:"",
  email:"",
  email2:"",
  telefono:"",
  direccion:""
}


function CartCheckOut() {

    const {customItems,comprarCustomItem} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [impuestos, setImpuestos] = useState(0);
    const [totalFinal, setTotalFinal] = useState(0);
    const [form, setForm] = useState(initialForm);
    const [emailValid, setEmailValid] = useState(true);
    const [idCompra, setIdCompra] = useState(0);
    const [loader, setLoader] = useState(false);

  
    useEffect(() => {
  
      let totalEffect = 0;
      let impuestosEffect = 0;
      let totalFinalEffect = 0;
      const envio = 100;

      customItems.forEach(el => {
        totalEffect = totalEffect + (parseInt(el.precio) * el.quantity);
      });
      setTotal(totalEffect);

      impuestosEffect = totalEffect * 0.21
      setImpuestos(parseFloat(impuestosEffect).toFixed( 2 ));

      totalFinalEffect = total+impuestosEffect+envio;
      setTotalFinal(parseFloat(totalFinalEffect).toFixed( 2 ));

    }, [total,customItems]);

    const handleChange = (e) =>{
      setForm(
          {
              ...form,
              [e.target.name]:e.target.value,
          }
      );
  }

  const handleEmail = () =>{

    if (form.email === form.email2){
      setEmailValid(true);
    }else{
      setEmailValid(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    let nuevaFecha = new Date().toISOString().slice(0, 10);
    let nuevaHora = new Date().toISOString().slice(11, 19);
    let datos = {nombre:form.nombre,email: form.email,telefono: form.telefono,direccion: form.direccion}

    let envio = {datos: datos, items:customItems, total:totalFinal, fecha: nuevaFecha, hora: nuevaHora}
    console.log(envio);

    const db = getFirestore();

    const ordersCollection = collection(db,"compras");

    addDoc(ordersCollection, envio).then(({id})=> {
      console.log(id);
      setIdCompra(id);
      setLoader(false);
      comprarCustomItem();
    });

  }


  return (
    <div className='CartCheckOut'>
    
        <h1 className='CartCheckOutTitulo'>Terminar Compra</h1>


        {
        !idCompra?
          !loader?
          <CartCheckOutForm 
            customItems={customItems}
            total={total}
            totalFinal={totalFinal}
            impuestos={impuestos}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleEmail={handleEmail}
            emailValid={emailValid}
          />:<Loader/>

         : 
            
            <div className='CartCheckOutFinish'>
                <h2>Muchas Gracias!</h2>
                <p>El proceso de compra ha finalizado</p>
                <p>este es su numero de referencia</p>
                <strong>{idCompra}</strong>
                <p>En breve nos pondremos en contacto con usted</p>
                <p>Para ultimar detalles de pago y envio.</p>
            
            </div>
        }
    
    </div>
  )
}

export default CartCheckOut