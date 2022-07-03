import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import "./Articulo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { CarritoContext } from '../../../context/CarritoContext';

// Imprime UNA Tarjeta Articulo, con id,imagen,producto,subproducto,stock y precio
// Recibe un objeto Articulo

function Articulo({ articulo }) {

  const {agregarAFavorito,favoritosGuardados} = useContext(CarritoContext);

  return (
    <div className="articulo">
      <div className="articulo-favorito__cont">
        <button className="articulo-favorito__btn" onClick={()=>agregarAFavorito(articulo)}>
        {favoritosGuardados.some(obj => obj.id === articulo.id)? 
          <FontAwesomeIcon icon={faHeartSolid} className="articulo-favorito__icono"/> :
          <FontAwesomeIcon icon={faHeart} className="articulo-favorito__icono"/>
        }
        </button>
      </div>
      <Link to={"/Articulo/" + articulo.id}>
        <div className="articulo-img">
          <img
            src={process.env.PUBLIC_URL + "/images/" + articulo.imagenes[0]}
            alt={articulo.producto}
          />
        </div>
        <div className="articulo-body">
          <h2 className="articulo-title">{articulo.producto}</h2>

          <p className="articulo-intro">{articulo.subproducto}</p>
          <p className="articulo-stock">
            {articulo.stock ? "Unidades: " + articulo.stock : "Agotado"}
          </p>
          <p className="articulo-price">${articulo.precio}</p>
        </div>
      </Link>
      
    </div>
  );

}

export default Articulo;
