import React, { useContext} from "react";
import './MisCompras.css'
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import Compra from "./Compra";



function MisCompras() {
    const { misCompras } = useContext(CarritoContext);

    if (misCompras.length > 0) {
        return (

          <div className="carrito">
            <div className="carrito__titulo">
              <h1>Mis Compras</h1>
            </div>
            {
              misCompras.map((compra)=> <Compra key={compra.id} compra={compra} />)
            }
          </div>

        );
      } else {
        return (
          <div className="carrito">
            <div className="carrito__titulo">
              <h1>Mis Compras</h1>
            </div>
            <div>No has realizado ninguna Compra</div>
            <div className="carrito__comprar">
              <Link to={"/Catalogo/todos"}>
                <button className="articulo-cantidad__agregar">Realizar Compras</button>
              </Link>
            </div>
          </div>
        );
      }
}

export default MisCompras