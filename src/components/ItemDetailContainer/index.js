import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail'
import Loader from '../Loader';
import './ItemDetailContainer.css'

let itemData = 
  {
    id:1,
    modelo:"NAKED BIKE",
    producto:"KTM 890 DUKE",
    subproducto:"THE SCALPEL",
    ventaja:"La KTM 890 DUKE redefine la palabra 'afilado' subiendo un peldaño extra. Impulsada por un bicilíndrico paralelo de 889 cc.",
    descripcion:"La KTM 890 DUKE R incorpora todo lo que nos gusta de las DUKE y lo lleva al límite absoluto. Esta moto naked sin compromisos se encuentra como en casa tanto en circuito como en carreteras de montaña. Creando un auténtico golpe de efecto en la categoría de media cilindrada, THE SUPER SCALPEL cumple exactamente con lo que anuncia.",
    precio:"2000.59",
    imagenes :[
      'ktm-890-duke-01.jpg',
      'ktm-890-duke-02.png',
      'ktm-890-duke-03.jpg',
      'ktm-890-duke-04.jpg'
    ]
  }
;

function ItemDetailContainer() {

  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getItem = new Promise(function(myResolve,myReject){
      setTimeout(() => {
        myResolve(itemData);
      }, 2000);
    });
  
    getItem.then(
      function(value){
        setData(value);
        setLoader(false);
      }
    );

  }, [])
  


  return (
    <div className='ItemDetailContainer'>
    
        {loader ? <Loader/> :
        <ItemDetail itemData={data}/>
        }
        
    </div>
  )
}

export default ItemDetailContainer