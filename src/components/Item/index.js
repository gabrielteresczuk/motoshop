import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


function Item({item}) {
  return (
    <div className='Item'>
      <Link to={'/Item/'+item.id}>
            <div className="Item-img">  
                    <img src={process.env.PUBLIC_URL +"/images/" + item.imagenes[0]} alt=''/>  
            </div>  
            <div className="Item-body">  
                    <h2 className="Item-title">  
                        {item.producto}
                    </h2>  
                    <p className="Item-intro">  
                        {item.subproducto}
                    </p>  
                    <p className="Item-price">  
                        ${item.precio}
                    </p>  
            </div>  
 
            </Link>
    </div>
  )
}

export default Item