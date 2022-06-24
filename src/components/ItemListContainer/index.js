import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import Loader from '../Loader';
import './ItemListContainer.css'

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState('');
    const [originalData, setOriginalData] = useState('');
    const [order, setOrder] = useState('relevante');
    const [filter, setFilter] = useState({min:'',max:''});
    const [minMax, setMinMax] = useState({min:'',max:''});

    let {categoria} = useParams();

    if(!categoria){
        categoria = 'todos';
    }


    useEffect(() => {

        const db = getFirestore();

        let q='';

        if(categoria === 'todos'){
            q = collection(db,'items');
        }else{
            q = query(
                collection(db,'items'),
                where("modelo","==",categoria.toUpperCase()));
        }

        getDocs(q).then((snapshot)=>{
            if(snapshot.size === 0){
                console.log('no hay resultados');
            }else{
            let resultado = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } ));

            setLoader(false);
            setData(resultado);
            setOriginalData(resultado);
            }
        });

    }, [categoria]);

    //Manejamos el Orden de los productos
    const handleOrder = (event) => {
        let numbers = [...data];

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
           numbers = [...originalData];
        }


        setData(numbers);
        setOrder(event.target.value);
    }

    const clearFilter = () =>{
        setFilter({min:'',max:''});
    }

    useEffect(() => {
     
      let dataFiltrada = [...originalData];

      if(filter.min || filter.max){
        console.log('entro');
        dataFiltrada = dataFiltrada.filter(el => el.precio >= parseInt(filter.min) && el.precio <= parseInt(filter.max) );
      }
        setData(dataFiltrada);
    
    }, [filter,originalData])


    const handleMinMax = (e) =>{
        setMinMax({...minMax, [e.target.name]:e.target.value});
    }

    const sendMinMax = () =>{
        let newmin = minMax.min || 0;
        let newmax = minMax.max || 50000;
        setFilter({...filter,
                min: newmin,
                max: newmax});
        setMinMax({min:'',max:''});
    }

    const removeMinMax = () =>{
        setFilter({...filter,
            min: 0,
            max: 0});
    }
    

    return ( 
        <div className='ItemListContainer'>
            
            <div className='ItemListContainer_contenido'>
                <div className='ItemListContainer_filter'>
                    {categoria || filter.max ? <><span>FILTROS</span><hr/></> :''}
                    
                    <ul className='ItemListContainer_filterRemove'>
                        { categoria === 'todos'? <li>Todos </li> : ''}
                        { categoria === 'Enduro'? <Link to={'/Lista/todos'}><li>Enduro <span>x</span></li></Link> : ''}
                        { categoria === 'Naked'? <Link to={'/Lista/todos'}><li>Naked <span>x</span></li></Link> : ''}
                        { categoria === 'MX'? <Link to={'/Lista/todos'}><li>MX <span>x</span></li></Link> : ''}
                        { categoria === 'SuperSport'? <Link to={'/Lista/todos'}><li>SuperSport <span>x</span></li></Link> : ''}
                        { categoria === 'Adventure'? <Link to={'/Lista/todos'}><li>Adventure <span>x</span></li></Link> : ''}
                        { filter.min || filter.max ? <li onClick={removeMinMax}>${filter.min} - ${filter.max}<span>x</span></li> : ''}
                        { filter.max ? <button onClick={() => clearFilter()} className='ItemListContainer_filterClear'>Limpar</button> :'' } 
                    </ul>
                    <span>CATEGORIAS</span>
                    <hr/>
                    <ul className='ItemListContainer_filterAdd'>
                        { categoria !== 'Enduro'? <Link to={'/Lista/Enduro'}><li >Enduro <span>&#62;</span></li></Link> : ''}
                        { categoria !== 'Naked'? <Link to={'/Lista/Naked'}><li >Naked <span>&#62;</span></li> </Link> : ''}
                        { categoria !== 'MX'? <Link to={'/Lista/MX'}><li >MX <span>&#62;</span></li> </Link> : ''}
                        { categoria !== 'SuperSport'? <Link to={'/Lista/SuperSport'}><li >SuperSport <span>&#62;</span></li> </Link> : ''}
                        { categoria !== 'Adventure'? <Link to={'/Lista/Adventure'}><li >Adventure <span>&#62;</span></li> </Link> : ''}
                    </ul>
                    <span>PRECIO</span>
                    <hr/>
                    <div className='ItemListContainer_filterMinMax'>
                    <input type="number" placeholder='minimo' name='min' value={minMax.min} onChange={handleMinMax}></input>-
                    <input type="number" placeholder='maximo' name='max' value={minMax.max} onChange={handleMinMax}></input>
                    <button onClick={sendMinMax} className='ItemListContainer_filterClear'>Filtrar</button>
                    </div>
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