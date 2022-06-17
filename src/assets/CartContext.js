import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

function CustomCartContext({defaultValue = [], children}) {

    const [customItems, setCustomItems] = useState(defaultValue);

    const isInCart = (id) => {
        return customItems.some(obj => obj.item === id);
    }

    // Se agrega el item al ARRAY, si ya existe, SUMA la QUANTITY
    const addCustomItems = (obj) =>{

        if (!isInCart(obj.item)){
            setCustomItems([...customItems,obj]);
        } else{
            console.log("el item solo se sumara");
            let nuevoCustomItems = customItems.map(el => el.item === obj.item ? {...el, quantity: el.quantity+obj.quantity}: el);
            setCustomItems(nuevoCustomItems);
        }
    }

    //COMENTO PARA QUE AL COMPILAR NO DE WARNING, para usar en el proximo desafio

    /*const removeCustomItem = (id) =>{
        let newCustomItems = customItems.filter(el => el.item !== id );
        setCustomItems(newCustomItems);
    }

    const clearCustomItem = () => {
        setCustomItems([]);
    }*/

  return (
    <CartContext.Provider value={{customItems,addCustomItems}}>
        {children}
    </CartContext.Provider>
  )
}

export default CustomCartContext
