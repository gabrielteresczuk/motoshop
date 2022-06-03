import React from 'react'
import './Item.css'


function Item({item}) {
  return (
    <div className='Item'>

            <div className="Item-img">  
                    <img src={process.env.PUBLIC_URL +"/images/" + item.img} alt=''/>  
            </div>  
            <div className="Item-body">  
                    <h2 className="Item-title">  
                        {item.producto}
                    </h2>  
                    <p className="Item-intro">  
                        {item.descripcion}
                    </p>  
                    <p className="Item-price">  
                        {item.precio}
                    </p>  
            </div>  
 
    
    </div>
  )
}

export default Item