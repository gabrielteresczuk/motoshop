import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './FavoritoWidget.css'

function FavoritoWidget({favoritosGuardados}) {
    
    return (
        <>
          <Link to={"/Favoritos"}>
            <button className='favorito-widget' >
            {favoritosGuardados.length > 0 ?
                <FontAwesomeIcon icon={faHeartSolid} className="favorito-widget__icono"/>
                :
                <FontAwesomeIcon icon={faHeart} className="favorito-widget__icono"/>
              }    
            </button>
          </Link>
        </>
      );
}

export default FavoritoWidget