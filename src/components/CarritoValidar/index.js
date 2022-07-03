import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import './CarritoValidar.css'
import {collection, getFirestore, addDoc} from 'firebase/firestore'
import CarritoValidarForm from './CarritoValidarForm';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const formularioInicial = {
  nombre:"",
  email:"",
  email2:"",
  telefono:"",
  direccion:""
}

function CarritoValidar() {

    const {articulosEnCarrito,finalizarCarrito,carritoTotal,carritoImpuestos,carritoTotalFinal,agregarCompra} = useContext(CarritoContext);

    const [form, setForm] = useState(formularioInicial);
    const [emailValido, setEmailValido] = useState(true);
    const [idCompra, setIdCompra] = useState(0);
    const [loader, setLoader] = useState(false);

    // modifica el valor del "name" del objeto formulario
    const handleChange = (e) =>{
      setForm(
          {
              ...form,
              [e.target.name]:e.target.value,
          }
      );
  }

  //controla si los correos son iguales
  const handleEmail = () =>{

    if (form.email === form.email2){
      setEmailValido(true);
    }else{
      setEmailValido(false);
    }
  }

  // Envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    let nuevaFecha = new Date().toISOString().slice(0, 10);
    let nuevaHora = new Date().toISOString().slice(11, 19);
    let datos = {nombre:form.nombre,email: form.email,telefono: form.telefono,direccion: form.direccion}
    let envio = {datos: datos, items:articulosEnCarrito, total:carritoTotalFinal, fecha: nuevaFecha, hora: nuevaHora}

    const db = getFirestore();
    const insertarCompra = collection(db,"compras");

    addDoc(insertarCompra, envio).then(({id})=> {
      setIdCompra(id);
      agregarCompra(id,envio);
      setLoader(false);
      finalizarCarrito();
    });

  }

  if(articulosEnCarrito.length <= 0 && !idCompra){

    return(
      <div className="carrito">
        <div className="carrito__titulo">
          <h1>Completar Formulario</h1>
        </div>
        <div>No se encuentran Productos en el Carrito</div>
        <div className="carrito__comprar">
          <Link to={"/Catalogo/todos"}>
            <button className="articulo-cantidad__agregar">Realizar Compras</button>
          </Link>
        </div>
      </div>
    );

  }else{

  return (
    <div className='carrito-validar'>
    
        {
        !idCompra?
          !loader?

          <>
          <h1 className='carrito-validar__titulo'>Completar Formulario</h1>
          <div className="progress-bar__cont">
          <ul className="progress-bar">
              <li className="active">Cargar el carrito</li>
              <li className="active">Completar Datos</li>
              <li >Finalizado</li>
            </ul>
          </div>
          <CarritoValidarForm
            articulosEnCarrito={articulosEnCarrito}
            total={carritoTotal}
            totalFinal={carritoTotalFinal}
            impuestos={carritoImpuestos}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleEmail={handleEmail}
            emailValido={emailValido}
          /> </>:<Loader/>
          
         : 
         <>
         <h1 className='carrito-validar__titulo'>Finalizado</h1>
         <div className="progress-bar__cont">
         <ul className="progress-bar">
            <li className="active">Cargar el carrito</li>
            <li className="active">Completar Datos</li>
            <li className="active">Finalizado</li>
          </ul>
          </div>
            <div className='carrito-validar__terminar-cont'>
            <div className='carrito-validar__terminar'>
                <h2>Muchas Gracias!</h2>
                <p>El proceso de compra ha finalizado</p>
                <p>este es su numero de referencia</p>
                <strong>{idCompra}</strong>
                <div>Ir a <Link to={"/MisCompras"}>Mis Compras</Link></div>
                <p>En breve nos pondremos en contacto con usted</p>
                <p>Para ultimar detalles de pago y envio.</p>
            </div>
            </div>
          </>
        }
    
    </div>
  )
  }
}

export default CarritoValidar