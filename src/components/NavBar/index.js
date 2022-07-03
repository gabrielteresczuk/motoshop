import React, { useContext } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import CarritoWidget from "./CarritoWidget";
import { Link, NavLink } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import FavoritoWidget from "./FavoritosWidget";
import MisComprasWidget from "./MisComprasWidget";

export default function NavBar() {
  
  //conext para traer la cantidad de Articulos en el Carrito
  const { cantidadEnCarrito , favoritosGuardados,misCompras} = useContext(CarritoContext);

  return (
    <nav className="nav-bar__contenedor">
      <div className="nav-bar__logo">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faMotorcycle} className="nav-bar__moto" />
          <span>MOTO</span>
          SHOP
        </Link>
      </div>

      <ul className="nav-bar__navegacion">
        <li className="nav-bar__li">
          <NavLink to={"/"}>INICIO</NavLink>
        </li>
        <li className="nav-bar__li">
          <NavLink to={"/Catalogo"}>PRODUCTOS</NavLink>
        </li>
        <li className="nav-bar__li">
          <NavLink to={"/Contacto"}>CONTACTO</NavLink>
        </li>
      </ul>

      <div className="nav-bar__carrito">
        <FavoritoWidget favoritosGuardados={favoritosGuardados}/>
        <MisComprasWidget misCompras={misCompras}/>
        <CarritoWidget cantidadEnCarrito={cantidadEnCarrito} />
        
      </div>
    </nav>
  );
}
