import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail'
import Loader from '../Loader';
import './ItemDetailContainer.css'
import {dataDB} from '../../assets/dataBase'
import NoMatch from '../NoMatch';


function ItemDetailContainer() {

  const {ItemId} = useParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {

    const getItem = new Promise(function(myResolve,myReject){
      setTimeout(() => {
        myResolve(
          //itemData[2]
          dataDB.find((el) => el.id === parseInt(ItemId))
          );
      }, 500);
    });
  
    getItem.then(
      function(value){
        setData(value);
        setLoader(false);
      }
    );

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