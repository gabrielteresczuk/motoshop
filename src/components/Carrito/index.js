import React, { useContext } from "react";
import "./Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";
import CarritoFila from "./CarritoFila";
import { Link } from "react-router-dom";

function Carrito() {
  const { articulosEnCarrito, limpiarArticulosEnCarrito, carritoTotal } =
    useContext(CarritoContext);

  if (articulosEnCarrito.length > 0) {
    return (

      <div className="carrito">
        <div className="carrito__titulo">
          <h1>Carrito</h1>
        </div>

        <div className="progress-bar__cont">
          <ul className="progress-bar">
            <li className="active">Cargar el carrito</li>
            <li>Completar Datos</li>
            <li>Finalizado</li>
          </ul>
        </div>

        <div className="carrito__table-cont">
          <table className="carrito__table">
            <thead>
              <tr>
                <th>IMAGEN</th>
                <th>DESCRIPCION</th>
                <th>CANTIDAD</th>
                <th>TOTAL</th>
                <th>ACCION</th>
              </tr>
            </thead>
            <tbody>
              {articulosEnCarrito.map((el) => (
                <CarritoFila key={el.id} articulo={el} />
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>${carritoTotal}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="carrito__terminar">
          <button
            className="carrito__btn-limpiar"
            onClick={limpiarArticulosEnCarrito}
          >
            Limpiar Carrito
          </button>
          <Link to={"/Carrito/Validar"}>
            <button className="articulo-cantidad__agregar">Terminar Compra</button>
          </Link>
        </div>
      </div>

    );
  } else {
    return (
      <div className="carrito">
        <div className="carrito__titulo">
          <h1>Carrito</h1>
        </div>
        <div>No se encuentran Productos en el Carrito</div>
        <div className="carrito__comprar">
          <Link to={"/Catalogo/todos"}>
            <button className="articulo-cantidad__agregar">Realizar Compras</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Carrito;
