import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import Loader from '../Loader';
import './ItemListContainer.css'
import {dataDB} from '../../assets/dataBase'


const ItemListContainer = () => {

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState('');

    useEffect(() => {

        const fetchData = async () => {

            let myPromise = new Promise(function(myResolve, myReject) {
                setTimeout(function() { 
                    myResolve(dataDB); 
                }, 500);
            });

            setData(await myPromise);
            setLoader(false);
        }

        fetchData();



    }, []);

    return ( 
        <div className='ItemListContainer'>
            Lista de Productos
            {loader ? 
            <Loader/>
            :
            <ItemList items={data}/>
            }
            
        </div>
     );
}
 
export default ItemListContainer;