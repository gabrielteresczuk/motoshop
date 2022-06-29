import React, { useState } from 'react'
import { createContext } from 'react'
import {doc, getFirestore, updateDoc, increment} from 'firebase/firestore'

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
        updateBase('restar',obj, obj.quantity);
    }

    // hacemos una consulta para actulizar el item, en caso de agregar o eliminar
    const updateBase = (accion,obj, quantity) => {
        if(accion === 'restar'){
            const db = getFirestore();
            const baseDoc = doc(db,"items", obj.id);
            
            updateDoc(baseDoc, {stock:increment(-quantity)});
        }
        if(accion === 'sumar'){
            const db = getFirestore();
            const baseDoc = doc(db,"items", obj.id);
            updateDoc(baseDoc, {stock:increment(quantity)});
        }
    }
    

    // elimina un elemnto del array
    const removeCustomItem = (obj) =>{
        let newCustomItems = customItems.filter(el => el.id !== obj.id );
        setCustomItems(newCustomItems);
        updateBase('sumar',obj, obj.quantity);
    }

    // limpa el array completamente
    const clearCustomItem = () => {
        customItems.forEach((el)=>{
            updateBase('sumar',el, el.quantity);
        });
        setCustomItems([]);
    }

    const comprarCustomItem = () => {

        setCustomItems([]);
    }

    //agrega una cantidad mas al item
    const addCustomQuantity = (item, cantidad) => {
        if(cantidad <= item.stock-1){
        let newCustomItems = customItems.filter(el => el.id !== item.id );
        newCustomItems = [...newCustomItems,{...item,quantity:cantidad+1}];
        setCustomItems(newCustomItems);
        updateBase('restar',item,1);
        }
    }

    //resta la cantidad al item
    const restarCustomQuantity = (item, cantidad) =>{
        if(cantidad>1){
            let newCustomItems = customItems.filter(el => el.id !== item.id );
            newCustomItems = [...newCustomItems,{...item,quantity:cantidad-1}];
            setCustomItems(newCustomItems);
            updateBase('sumar',item,1);
        }
    }

  return (
    <CartContext.Provider value={{customItems,addCustomItems,removeCustomItem,clearCustomItem,addCustomQuantity,restarCustomQuantity,comprarCustomItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CustomCartContext
