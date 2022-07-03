import React, { useEffect, useState } from 'react'
import ArticuloLista from './ArticuloLista';
import Loader from '../Loader';
import './ArticuloListaContenedor.css'

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom';

// Contenedor de Categorias, filtros y Lista de Articulos


const ArticuloListaContenedor = () => {

    const [loader, setLoader] = useState(true);
    const [datos, setDatos] = useState('');
    const [datosOriginales, setDatosOriginales] = useState('');
    const [orden, setOrden] = useState('relevante');
    const [filtro, setFiltro] = useState({min:'',max:''});
    const [minMax, setMinMax] = useState({min:'',max:''});

    let {categoria} = useParams();

    if(!categoria){
        categoria = 'todos';
    }

    // escucha si cambio la categoria sino, muestra todo el catalogo
    useEffect(() => {

        const db = getFirestore();

        let consulta='';

        if(categoria === 'todos'){
            consulta = collection(db,'articulos');
        }else{
            consulta = query(
                collection(db,'articulos'),
                where("modelo","==",categoria.toUpperCase()));
        }

        getDocs(consulta).then((respuesta)=>{
            if(respuesta.size){
            let resultado = respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() } ));
            setLoader(false);
            setDatos(resultado);
            setDatosOriginales(resultado);
            }
        });

    }, [categoria]);


    //Manejamos el Orden de los productos, mayor/menor/relevante
    const handleOrden = (event) => {
        let datosOrdenados = [...datos];

        if(event.target.value === 'mayor'){
            datosOrdenados.sort(function(a, b) {
                return b.precio - a.precio;
                });
        }

        if(event.target.value === 'menor'){
            datosOrdenados.sort(function(a, b) {
                return a.precio - b.precio;
                });
        }

        if(event.target.value === 'relevante'){
            datosOrdenados = [...datosOriginales];
        }

        setDatos(datosOrdenados);
        setOrden(event.target.value);
    }

    //limpiamos el filtro 
    const clearFilter = () =>{
        setFiltro({min:'',max:''});
    }

    // escucha si hubo un cambio en algun filtro
    useEffect(() => {
     
      let dataFiltrada = [...datosOriginales];

      if(filtro.min || filtro.max){
        dataFiltrada = dataFiltrada.filter(el => el.precio >= parseInt(filtro.min) && el.precio <= parseInt(filtro.max) );
      }
        setDatos(dataFiltrada);
    
    }, [filtro,datosOriginales])


    //maneja cambios en maximo o minimo
    const handleMinMax = (e) =>{
        setMinMax({...minMax, [e.target.name]:e.target.value});
    }

    //envia los valores de maximo y minimo
    const sendMinMax = () =>{
        let newmin = minMax.min || 0;
        let newmax = minMax.max || 50000;
        setFiltro({...filtro,
                min: newmin,
                max: newmax});
        setMinMax({min:'',max:''});
    }

    //remueve un maximo o minimo
    const removerMinMax = () =>{
        setFiltro({...filtro,
            min: 0,
            max: 0});
    }
    

    return ( 
        <div className='articulo-lista__cont'>
            
            <div className='articulo-lista__cont-cont'>
                <div className='articulo-lista__cont-filtro'>
                    {categoria || filtro.max ? <><span>FILTROS</span><hr/></> :''}
                    
                    <ul className='articulo-lista__cont-filtro-borrar'>
                        { categoria === 'todos'? <li>Todos </li> : ''}
                        { categoria === 'Enduro'? <Link to={'/Catalogo/todos'}><li>Enduro <span>x</span></li></Link> : ''}
                        { categoria === 'Naked'? <Link to={'/Catalogo/todos'}><li>Naked <span>x</span></li></Link> : ''}
                        { categoria === 'MX'? <Link to={'/Catalogo/todos'}><li>MX <span>x</span></li></Link> : ''}
                        { categoria === 'SuperSport'? <Link to={'/Catalogo/todos'}><li>SuperSport <span>x</span></li></Link> : ''}
                        { categoria === 'Adventure'? <Link to={'/Catalogo/todos'}><li>Adventure <span>x</span></li></Link> : ''}
                        { filtro.min || filtro.max ? <li onClick={removerMinMax}>${filtro.min} - ${filtro.max}<span>x</span></li> : ''}
                        { filtro.max ? <button onClick={() => clearFilter()} className='articulo-lista__cont-filtro-limpiar'>Limpar</button> :'' } 
                    </ul>
                    <span>CATEGORIAS</span>
                    <hr/>
                    <ul className='articulo-lista__cont-filtro-agregar'>
                        { categoria !== 'Enduro'? <Link to={'/Catalogo/Enduro'}><li >Enduro <span>&#62;</span></li></Link> : ''}
                        { categoria !== 'Naked'? <Link to={'/Catalogo/Naked'}><li >Naked <span>&#62;</span></li> </Link> : ''}
                        { categoria !== 'MX'? <Link to={'/Catalogo/MX'}><li >MX <span>&#62;</span></li> </Link> : ''}
                        { categoria !== 'SuperSport'? <Link to={'/Catalogo/SuperSport'}><li >SuperSport <span>&#62;</span></li> </Link> : ''}
                        { categoria !== 'Adventure'? <Link to={'/Catalogo/Adventure'}><li >Adventure <span>&#62;</span></li> </Link> : ''}
                    </ul>
                    <span>PRECIO</span>
                    <hr/>
                    <div className='articulo-lista__cont-filtro-minmax'>
                    <input type="number" placeholder='minimo' name='min' value={minMax.min} onChange={handleMinMax}></input>-
                    <input type="number" placeholder='maximo' name='max' value={minMax.max} onChange={handleMinMax}></input>
                    <button onClick={sendMinMax} className='articulo-lista__cont-filtro-limpiar'>Filtrar</button>
                    </div>
                </div>

                <div className='articulo-lista__cont-orden-cont'>
                    <div className='articulo-lista__cont-orden'>
                        <div className='articulo-lista__cont-orden2'>
                        <span>{datos.length} Resultados</span>
                        <select className='articulo-lista__cont-select' onChange={handleOrden} value={orden}>
                            <option value="relevante">Mas Relevante</option>
                            <option value="menor">Menor Precio</option>
                            <option value="mayor">Mayor Precio</option>
                        </select>
                        </div>
                    </div>
                    {loader ? 
                    <Loader/>
                    :
                    <ArticuloLista articulos={datos}/>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default ArticuloListaContenedor;