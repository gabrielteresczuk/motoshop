import React from 'react'
import ItemCount from '../ItemCount';
import './ItemListContainer.css'

const ItemListContainer = () => {
    return ( 
        <div className='ItemListContainer'>
            <ItemCount stock={5} initial={1}/>
        </div>
     );
}
 
export default ItemListContainer;