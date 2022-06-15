import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom';

function ItemDetail({itemData}) {


    const [slide, setSlide] = useState(0);
    const [count, setCount] = useState(0)

    const handlePrevSlide = () =>{
        slide === 0 ?
        setSlide(3) :
        setSlide(slide-1);
    }

    const handleNextSlide = () =>{
      slide === 3 ?
        setSlide(0):
        setSlide(slide+1);
    }

    const handleIndexSlide = (index)=>{
        setSlide(index);
    }

    const onAdd = (valor) =>{
        setCount(valor);
    }


  return (
    <div className='ItemDetail'>

    <div className="ItemDetail_gridContainer">

        <div className="ItemDetail_carousel">
            <div className="ItemDetail_slideshowContainer">

                
                <div className="ItemDetail_fade">
                    <img className='ItemDetail_img' src={process.env.PUBLIC_URL +"/images/" + itemData.imagenes[slide]} alt=''/>
                </div>        
                
                <div className="ItemDetail_prev" onClick={handlePrevSlide}>&#10094;</div>
                <div className="ItemDetail_next" onClick={handleNextSlide}>&#10095;</div>
            </div>
            <br/>
            
            
            <div className='ItemDetail_dotContainer'>
                {itemData.imagenes.map((el,index)=> 
                <span className={slide === index ? "ItemDetail_dot ItemDetail_active" : "ItemDetail_dot" } 
                key={index} 
                onClick={()=>handleIndexSlide(index)} >
                </span>)}
            </div>

        </div>


        <div className="ItemDetail_descripcion">
            
            <div className="ItemDetail_model">{itemData.modelo}</div>
            <div className="ItemDetail_product">{itemData.producto}</div>
            <div className="ItemDetail_subproduct">{itemData.subproducto}</div>
            <div className="ItemDetail_advantage">{itemData.ventaja}</div>
            <div className="ItemDetail_description">{itemData.descripcion}</div>
            <div>
                <div className="rating">
                    <input name="stars" id="e5" type="radio"/><label htmlFor="e5">☆</label>
                    <input name="stars" id="e4" type="radio"/><label htmlFor="e4">☆</label>
                    <input name="stars" id="e3" type="radio"/><label htmlFor="e3">☆</label>
                    <input name="stars" id="e2" type="radio"/><label htmlFor="e2">☆</label>
                    <input name="stars" id="e1" type="radio"/><label htmlFor="e1">☆</label>
                </div>

            </div>    
            <div className="ItemDetail_precio">${itemData.precio}</div>
            <div className="ItemDetail_cantidad">
            { count ? 
            <Link to={'/Cart'}>Ir Al Carrito</Link>: 
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            }
            </div>
            
        </div>


    </div>

    </div>
  )
}

export default ItemDetail