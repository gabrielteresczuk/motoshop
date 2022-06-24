import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

function CustomCartContext({defaultValue = [], children}) {

    const [customItems, setCustomItems] = useState(defaultValue);

    const isInCart = (id) => {
        return customItems.some(obj => obj.id === id);
    }

    // Se agrega el item al ARRAY, si ya existe, SUMA la QUANTITY
    const addCustomItems = (obj) =>{

        if (!isInCart(obj.id)){
            setCustomItems([...customItems,obj]);
        } else{
            console.log("el item solo se sumara");
            let nuevoCustomItems = customItems.map(el => el.id === obj.id ? {...el, quantity: el.quantity+obj.quantity}: el);
            setCustomItems(nuevoCustomItems);
        }
       
    }

    // elimina un elemnto del array
    const removeCustomItem = (id) =>{
        let newCustomItems = customItems.filter(el => el.id !== id );
        setCustomItems(newCustomItems);
    }

    // limpa el array completamente
    const clearCustomItem = () => {
        setCustomItems([]);
    }

    //agrega una cantidad mas al item
    const addCustomQuantity = (item, cantidad) => {
        //console.log(item,cantidad);
        if(cantidad <= 4){
        let newCustomItems = customItems.filter(el => el.id !== item.id );
        newCustomItems = [...newCustomItems,{...item,quantity:cantidad+1}];
        setCustomItems(newCustomItems);
        }
    }

    //resta la cantidad al item
    const restarCustomQuantity = (item, cantidad) =>{
        if(cantidad>1){
            let newCustomItems = customItems.filter(el => el.id !== item.id );
            newCustomItems = [...newCustomItems,{...item,quantity:cantidad-1}];
            setCustomItems(newCustomItems);
        }
    }

  return (
    <CartContext.Provider value={{customItems,addCustomItems,removeCustomItem,clearCustomItem,addCustomQuantity,restarCustomQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default CustomCartContext
