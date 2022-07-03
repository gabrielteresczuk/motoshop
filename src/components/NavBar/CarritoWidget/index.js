import React from "react";
import "./CarritoWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CarritoWidget = ({ cantidadEnCarrito }) => {
    
  if (cantidadEnCarrito > 0) {
    return (
      <>
        <Link to={"/Carrito"}>
          <button className="carrito-widget__btn">
            <FontAwesomeIcon icon={faCartShopping} /> {cantidadEnCarrito}
          </button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <button className="carrito-widget__btn-Disabled">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </button>
      </>
    );
  }
};

export default CarritoWidget;
