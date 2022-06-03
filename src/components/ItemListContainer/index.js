import React, { useEffect, useState } from 'react'
//import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import './ItemListContainer.css'

let dataDB = [
    {
        id:1,
        producto:"KTM 890 DUKE R",
        descripcion:"THE SUPER SCALPEL",
        precio:"2.500",
        img:"890.png"
    },
    {
        id:2,
        producto:"KTM 390 DUKE",
        descripcion:"THE CORNER ROCKET",
        precio:"2.000",
        img:"390.jpg"
    },
    {
        id:3,
        producto:"KTM 250",
        descripcion:"KTM BIKE",
        precio:"1.500",
        img:"250.jpg"
    }
];

const ItemListContainer = () => {

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState('');

    useEffect(() => {

        const fetchData = async () => {

            let myPromise = new Promise(function(myResolve, myReject) {
                setTimeout(function() { 
                    myResolve(dataDB); 
                }, 2000);
            });

            setData(await myPromise);
            setLoader(false);
        }

        fetchData();



    }, []);

    return ( 
        <div className='ItemListContainer'>
            {/*<ItemCount stock={5} initial={1}/>*/}
            Lista de Productos
            {loader ? 
            (<div className='Load-Container'><div className="lds-dual-ring"></div></div>)
            :
            <ItemList items={data}/>
            }
            
        </div>
     );
}
 
export default ItemListContainer;