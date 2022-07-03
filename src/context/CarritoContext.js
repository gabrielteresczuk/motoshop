import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {doc, getFirestore, updateDoc, increment} from 'firebase/firestore'

export const CarritoContext = createContext();

function CarritoContextContenedor({children}) {

    //guarda un obj con los Articulos en el Carrito
    const [articulosEnCarrito, setArticulosEnCarrito] = useState(JSON.parse( localStorage.getItem('MotoShop') ) || []);
    const [favoritosGuardados, setFavoritosGuardados] = useState(JSON.parse( localStorage.getItem('MotoShopFavoritos') ) || []);
    const [misCompras, setMisCompras] = useState(JSON.parse( localStorage.getItem('MotoShopCompras') ) || []);
    // valor de items para el carrito
    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);
    // total de precio* cantidad , impuestos y el total final
    const [carritoTotal, setCarritoTotal] = useState(0);
    const [carritoImpuestos, setCarritoImpuestos] = useState(0);
    const costoEnvio = 100;
    const [carritoTotalFinal, setCarritoTotalFinal] = useState(0);

    //se ejecuta cada vez que cambia el valor de articulosEnCarrito
    useEffect(() => {
        let cantidadEffect = 0;
        let totalEffect = 0;

        articulosEnCarrito.forEach(el => {
            cantidadEffect = cantidadEffect + el.quantity;
            totalEffect = totalEffect + (parseInt(el.precio) * el.quantity);
        });
        setCantidadEnCarrito(cantidadEffect);
        setCarritoTotal(totalEffect);

        let impuestosEffect = totalEffect * 0.21
        setCarritoImpuestos(parseFloat(impuestosEffect).toFixed( 2 ));

        let totalFinalEffect = totalEffect+impuestosEffect+costoEnvio;
        setCarritoTotalFinal(parseFloat(totalFinalEffect).toFixed( 2 ));
    }, [articulosEnCarrito]);
    

    // comprueba si el id existe en el carro
    const estaEnElCarrito = (id) => {
        return articulosEnCarrito.some(obj => obj.id === id);
    }

    // Se agrega el item al ARRAY, si ya existe, SUMA la QUANTITY
    const agregarAlCarrito = (obj) =>{
        if (!estaEnElCarrito(obj.id)){
            setArticulosEnCarrito([...articulosEnCarrito,obj]);
            localStorage.setItem('MotoShop', JSON.stringify([...articulosEnCarrito,obj]));
        } else{
            let nuevoArticulosEnCarrito = articulosEnCarrito.map(el => el.id === obj.id ? {...el, quantity: el.quantity+obj.quantity}: el);
            setArticulosEnCarrito(nuevoArticulosEnCarrito);
            localStorage.setItem('MotoShop', JSON.stringify(nuevoArticulosEnCarrito));
        }
        actualizarBaseDatos('restar',obj, obj.quantity);
    }

    // hacemos una consulta para actualizar el Articulo, en caso de agregar o eliminar
    const actualizarBaseDatos = (accion,obj, quantity) => {
        if(accion === 'restar'){
            const db = getFirestore();
            const baseDoc = doc(db,"articulos", obj.id);
            updateDoc(baseDoc, {stock:increment(-quantity)});
        }
        if(accion === 'sumar'){
            const db = getFirestore();
            const baseDoc = doc(db,"articulos", obj.id);
            updateDoc(baseDoc, {stock:increment(quantity)});
        }
    }
    

    // elimina un elemnto del array
    const removerArticuloEnCarrito = (obj) =>{
        let nuevoArticulosEnCarrito = articulosEnCarrito.filter(el => el.id !== obj.id );
        setArticulosEnCarrito(nuevoArticulosEnCarrito);
        localStorage.setItem('MotoShop', JSON.stringify(nuevoArticulosEnCarrito));
        actualizarBaseDatos('sumar',obj, obj.quantity);
    }

    // limpa el array completamente
    const limpiarArticulosEnCarrito = () => {
        articulosEnCarrito.forEach((el)=>{
            actualizarBaseDatos('sumar',el, el.quantity);
        });
        setArticulosEnCarrito([]);
        localStorage.setItem('MotoShop', '[]');
    }

    // Limpia el carrito al terminar la compra
    const finalizarCarrito = () => {
        setArticulosEnCarrito([]);
        localStorage.setItem('MotoShop', '[]');
    }

    //agrega una cantidad mas al item
    const sumarCantidadEnCarrito = (item, cantidad) => {
        if(cantidad <= item.stock-1){
        let nuevoArticulosEnCarrito = articulosEnCarrito.filter(el => el.id !== item.id );
        nuevoArticulosEnCarrito = [...nuevoArticulosEnCarrito,{...item,quantity:cantidad+1}];
        setArticulosEnCarrito(nuevoArticulosEnCarrito);
        localStorage.setItem('MotoShop', JSON.stringify(nuevoArticulosEnCarrito));
        actualizarBaseDatos('restar',item,1);
        }
    }

    //resta la cantidad al item
    const restarCantidadEnCarrito = (item, cantidad) =>{
        if(cantidad>1){
            let nuevoArticulosEnCarrito = articulosEnCarrito.filter(el => el.id !== item.id );
            nuevoArticulosEnCarrito = [...nuevoArticulosEnCarrito,{...item,quantity:cantidad-1}];
            setArticulosEnCarrito(nuevoArticulosEnCarrito);
            localStorage.setItem('MotoShop', JSON.stringify(nuevoArticulosEnCarrito));
            actualizarBaseDatos('sumar',item,1);
        }
    }


    // comprueba si el id existe en el carro
    const estaEnFavoritos = (id) => {
        return favoritosGuardados.some(obj => obj.id === id);
    }

    const removerFavorito = (articulo) => {
        let nuevoArticulosEnFavoritos = favoritosGuardados.filter(el => el.id !== articulo.id );
        setFavoritosGuardados(nuevoArticulosEnFavoritos);
        localStorage.setItem('MotoShopFavoritos', JSON.stringify([...favoritosGuardados,articulo]));
    }

    const agregarAFavorito = (articulo) =>{
        if (!estaEnFavoritos(articulo.id)){
            localStorage.setItem('MotoShopFavoritos', JSON.stringify([...favoritosGuardados,articulo]));
            setFavoritosGuardados([...favoritosGuardados,articulo]);
        }else{
            removerFavorito(articulo);
        }
    }

    const limparFavoritos = () =>{
        localStorage.setItem('MotoShopFavoritos', JSON.stringify([]));
        setFavoritosGuardados([]);
    }

    const agregarCompra = (id,envio) =>{
        localStorage.setItem('MotoShopCompras', JSON.stringify([...misCompras,{id:id,...envio}]));
        setMisCompras([...misCompras,{id:id,...envio}]);
    }


  return (
    <CarritoContext.Provider value={
        {articulosEnCarrito,
        favoritosGuardados,
        misCompras,
        cantidadEnCarrito,
        carritoTotal,
        carritoImpuestos,
        carritoTotalFinal,
        agregarAlCarrito,
        removerArticuloEnCarrito,
        limpiarArticulosEnCarrito,
        sumarCantidadEnCarrito,
        restarCantidadEnCarrito,
        finalizarCarrito,
        agregarAFavorito,
        removerFavorito,
        limparFavoritos,
        agregarCompra}}>

        {children}

    </CarritoContext.Provider>
  )
}

export default CarritoContextContenedor
