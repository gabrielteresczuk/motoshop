import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail'
import Loader from '../Loader';
import './ItemDetailContainer.css'
//import {dataDB} from '../../assets/dataBase'
import NoMatch from '../NoMatch';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


function ItemDetailContainer() {

  const {ItemId} = useParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {

    const db = getFirestore();

    const consulta = doc(db,'items',ItemId);

    getDoc(consulta).then((snapshot)=>{
      if(snapshot.size === 0){
        console.log('no hay resultados');
      }else{
            let resultado = {id:snapshot.id, ...snapshot.data()}
            setData(resultado);
            setLoader(false);
        }
    });

}, [ItemId]);

  return (
    <div className='ItemDetailContainer'>
    
        {
        loader ? <Loader/> :
        data ?
        <ItemDetail itemData={data}/> : <NoMatch/>
        }
        
    </div>
  )
}

export default ItemDetailContainer