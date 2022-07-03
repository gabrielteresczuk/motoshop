import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ArticuloDetalle from './ArticuloDetalle'
import Loader from '../Loader';
import './ArticuloDetalleContenedor.css'
import NoMatch from '../NoEncontrado';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


function ArticuloDetalleContenedor() {

  const {ArticuloId} = useParams();
  const [loader, setLoader] = useState(true);
  const [datosArticulo, setDatosArticulo] = useState(0);

  useEffect(() => {

    const db = getFirestore();

    const consulta = doc(db,'articulos',ArticuloId);

    getDoc(consulta).then((respuesta)=>{
      if(!respuesta.exists()){
          setDatosArticulo(0);
          setLoader(false);
      }else{
          let resultado = {id:respuesta.id, ...respuesta.data()}
          setDatosArticulo(resultado);
          setLoader(false);
        }
        
    });

}, [ArticuloId]);




  return (
    <div className='articulo-detalle-cont'>
    
    
        {
        loader ? <Loader/> :
        datosArticulo ?
        <ArticuloDetalle datosArticulo={datosArticulo}/> : <NoMatch/>
        }
        
    </div>
  )
}

export default ArticuloDetalleContenedor