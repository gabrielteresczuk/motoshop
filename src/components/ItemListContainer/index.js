import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import Loader from '../Loader';
import './ItemListContainer.css'
import {dataDB} from '../../assets/dataBase'


const ItemListContainer = () => {

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState('');
    const [order, setOrder] = useState('relevante');

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


    const handleOrder = (event) => {
        var numbers = [...data];

        if(event.target.value === 'mayor'){
            numbers.sort(function(a, b) {
                return b.precio - a.precio;
                });
        }

        if(event.target.value === 'menor'){
            numbers.sort(function(a, b) {
                return a.precio - b.precio;
                });
        }

        if(event.target.value === 'relevante'){
            numbers.sort(function(a, b) {
                return a.id - b.id;
                });
        }


        setData(numbers);
        setOrder(event.target.value);
    }

    return ( 
        <div className='ItemListContainer'>
            
            <div className='ItemListContainer_contenido'>
                <div className='ItemListContainer_filter'>
                    <span>CATEGORIAS</span>
                    <hr/>
                    <ul>
                        <li>Enduro <span>&#62;</span></li>
                        <li>Naked <span>&#62;</span></li>
                        <li>MX <span>&#62;</span></li>
                        <li>SuperSport  <span>&#62;</span></li>
                        <li>Travel <span>&#62;</span></li>
                    </ul>
                </div>

                <div className='ItemListContainer_orderContainer'>
                    <div className='ItemListContainer_order'>
                        <div className='ItemListContainer_order2'>
                        <span>{data.length} Resultados</span>
                        <select className='ItemListContainer_select' onChange={handleOrder} value={order}>
                            <option value="relevante">Mas Relevante</option>
                            <option value="menor">Menor Precio</option>
                            <option value="mayor">Mayor Precio</option>
                        </select>
                        </div>
                    </div>
                    {loader ? 
                    <Loader/>
                    :
                    <ItemList items={data}/>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default ItemListContainer;