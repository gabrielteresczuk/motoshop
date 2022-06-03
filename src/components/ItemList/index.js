import React from 'react'
import Item from '../Item'
import './ItemList.css'

function ItemList({items}) {

  return (
    <div className='itemList'>

        {
            items.map((el)=> <Item key={el.id} item={el}/>)
        }
        
    </div>
  )
}

export default ItemList