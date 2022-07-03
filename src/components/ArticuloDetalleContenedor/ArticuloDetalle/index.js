import React, { useContext, useState } from 'react'
import './ArticuloDetalle.css'
import ArticuloCantidad from '../ArticuloCantidad'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../../context/CarritoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

//Mostramos el Detalle completo de un Articulo 

function ArticuloDetalle({datosArticulo}) {


    const [slide, setSlide] = useState(0);
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const {agregarAlCarrito} = useContext(CarritoContext);

    //cambiar a un slide anterior
    const handleSlideAnterior = () =>{
        slide === 0 ?
        setSlide(datosArticulo.imagenes.length-1) :
        setSlide(slide-1);
    }
    //cambiar a un slide siguiente
    const handleSlideSiguiente = () =>{
      slide === datosArticulo.imagenes.length-1 ?
        setSlide(0):
        setSlide(slide+1);
    }
    //cambiar a un slide por su indice
    const handleSlideIndice = (indice)=>{
        setSlide(indice);
    }
    //Agregar una Cantidad al carrito
    const handleAgregar = (cantidad) =>{
        setCantidadAgregada(cantidad);
        agregarAlCarrito({...datosArticulo,quantity:cantidad});
    }


  return (
    <div className='articulo-detalle'>
    <div className='articulo-detalle__volver'><Link to={'/Catalogo'}><FontAwesomeIcon icon={faArrowLeft}/> Volver</Link></div>
    <div className="articulo-detalle__grid-cont">

        <div className="articulo-detalle__carousel">
            <div className="articulo-detalle__slide-cont">

                
                <div className="articulo-detalle__slide-fade">
                    <img className='articulo-detalle__slide-img' src={process.env.PUBLIC_URL +"/images/" + datosArticulo.imagenes[slide]} alt=''/>
                </div>        
                
                <div className="articulo-detalle__slide-anterior" onClick={handleSlideAnterior}>&#10094;</div>
                <div className="articulo-detalle__slide-siguiente" onClick={handleSlideSiguiente}>&#10095;</div>
            </div>
            <br/>
            
            
            <div className='articulo-detalle__slide-punto-cont'>
                {datosArticulo.imagenes.map((el,indice)=> 
                <span className={slide === indice ? "articulo-detalle__slide-punto articulo-detalle__slide-activo" : "articulo-detalle__slide-punto" } 
                key={indice} 
                onClick={()=>handleSlideIndice(indice)} >
                </span>)}
            </div>

        </div>


        <div className="articulo-detalle__desc">
            
            <div className="articulo-detalle__modelo">{datosArticulo.modelo}</div>
            <div className="articulo-detalle__producto">{datosArticulo.producto}</div>
            <div className="articulo-detalle__sub-producto">{datosArticulo.subproducto}</div>
            <div className="articulo-detalle__ventaja">{datosArticulo.ventaja}</div>
            <div className="articulo-detalle__descr">{datosArticulo.descripcion}</div>
            <div>
                <div className="articulo-detalle__rating">
                    <input name="stars" id="e5" type="radio"/><label htmlFor="e5">☆</label>
                    <input name="stars" id="e4" type="radio"/><label htmlFor="e4">☆</label>
                    <input name="stars" id="e3" type="radio"/><label htmlFor="e3">☆</label>
                    <input name="stars" id="e2" type="radio"/><label htmlFor="e2">☆</label>
                    <input name="stars" id="e1" type="radio"/><label htmlFor="e1">☆</label>
                </div>

            </div>    
            
            <div className="articulo-detalle__precio">${datosArticulo.precio}</div>
            <div className="articulo-detalle__modelo">{ datosArticulo.stock ? 'Unidades disponibles: '+(datosArticulo.stock-cantidadAgregada) : 'Agotado'}</div>
            <div className="articulo-detalle__cantidad">
            { cantidadAgregada ? 
                 (<>
                    <Link to={'/Catalogo'}><button className='articulo-detalle__btn-agregar'>Seguir Comprando</button></Link>
                    <Link to={'/Carrito'}><button className='articulo-detalle__btn-carrito'> Ir al Carrito </button></Link>
                    </>
                 ) 
                : 
                datosArticulo.stock ? <ArticuloCantidad stock={datosArticulo.stock} inicial={1} handleAgregar={handleAgregar}/> : ''
                
            }
            </div>
            
        </div>


    </div>

    </div>
  )
}

export default ArticuloDetalle