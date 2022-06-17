import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import Loader from '../Loader';
import './ItemListContainer.css'
import {dataDB} from '../../assets/dataBase'


const ItemListContainer = () => {

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState('');
    const [originalData, setOriginalData] = useState('');
    const [order, setOrder] = useState('relevante');
    const [filter, setFilter] = useState({min:'',max:'',modelo:[]});
    const [minMax, setMinMax] = useState({min:'',max:''});



    useEffect(() => {

        const fetchData = async () => {

            let myPromise = new Promise(function(myResolve, myReject) {
                setTimeout(function() { 
                    myResolve(dataDB); 
                }, 500);
            });

            setData(await myPromise);
            setOriginalData(await myPromise);
            setLoader(false);
        }

        fetchData();

    }, []);


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
            numbers.sort(function(a, b) {
                return a.id - b.id;
                });
        }


        setData(numbers);
        setOrder(event.target.value);
    }

    const addFilter = (filtro) => {
        setFilter({
                ...filter,
                modelo:[...filter.modelo,filtro]
                })
    }

    const removeFilter = (filtro) => {
        let nuevoFiltro = filter.modelo.filter(el => el !== filtro);
        setFilter({...filter,modelo:nuevoFiltro});
    }

    const clearFilter = () =>{
        setFilter({min:'',max:'',modelo:[]});
    }

    useEffect(() => {
     
      let dataAFiltrar = [...originalData];
      let dataFiltrada = [];

      if(filter.modelo.length > 0){
        for (const iterator of filter.modelo) {
            dataFiltrada = [...dataFiltrada,...dataAFiltrar.filter(el => el.modelo === iterator)];
        }
      }else{
        dataFiltrada = dataAFiltrar;
      }

      if(filter.min || filter.max){
        console.log('entro');
        dataFiltrada = dataFiltrada.filter(el => el.precio >= parseInt(filter.min) && el.precio <= parseInt(filter.max) );
      }


        setData(dataFiltrada);

    
    }, [filter,originalData])


    const handleMinMax = (e) =>{
        setMinMax({...minMax, [e.target.name]:e.target.value});
        //let nuevaDataMinMax = data.filter(el => el.precio >= parseInt(nuevoMin) && el.precio <= parseInt(nuemoMax) );
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
                    {filter.modelo.length || filter.max ? <><span>FILTROS</span><hr/></> :''}
                    
                    <ul className='ItemListContainer_filterRemove'>
                        { filter.modelo.includes('ENDURO') && <li onClick={() => removeFilter('ENDURO')}>Enduro <span>x</span></li>}
                        { filter.modelo.includes('NAKED') &&<li onClick={() => removeFilter('NAKED')}>Naked <span>x</span></li>}
                        { filter.modelo.includes('MX') &&<li onClick={() => removeFilter('MX')}>MX <span>x</span></li>}
                        { filter.modelo.includes('SUPERSPORT') &&<li onClick={() => removeFilter('SUPERSPORT')}>SuperSport  <span>x</span></li>}
                        { filter.modelo.includes('ADVENTURE') &&<li onClick={() => removeFilter('ADVENTURE')}>Adventure <span>x</span></li>}
                        { filter.min || filter.max ? <li onClick={removeMinMax}>${filter.min} - ${filter.max}<span>x</span></li> : ''}
                        { filter.modelo.length ? <button onClick={() => clearFilter()} className='ItemListContainer_filterClear'>Limpar</button> :'' } 
                    </ul>
                    <span>CATEGORIAS</span>
                    <hr/>
                    <ul className='ItemListContainer_filterAdd'>
                        { filter.modelo.includes('ENDURO') || <li onClick={() => addFilter('ENDURO')}>Enduro <span>&#62;</span></li>}
                        { filter.modelo.includes('NAKED') ||<li onClick={() => addFilter('NAKED')}>Naked <span>&#62;</span></li>}
                        { filter.modelo.includes('MX') ||<li onClick={() => addFilter('MX')}>MX <span>&#62;</span></li>}
                        { filter.modelo.includes('SUPERSPORT') ||<li onClick={() => addFilter('SUPERSPORT')}>SuperSport  <span>&#62;</span></li>}
                        { filter.modelo.includes('ADVENTURE') ||<li onClick={() => addFilter('ADVENTURE')}>Adventure <span>&#62;</span></li>}
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