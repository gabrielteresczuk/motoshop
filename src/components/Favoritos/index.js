import React, { useContext } from "react";
import './Favoritos.css'
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEye } from '@fortawesome/free-solid-svg-icons'

function Favoritos() {
    const { favoritosGuardados,removerFavorito,limparFavoritos } = useContext(CarritoContext);

    if (favoritosGuardados.length > 0) {
        return (

            <div className="carrito">
            <div className="carrito__titulo">
              <h1>Favoritos</h1>
            </div>
    
            <div className="carrito__table-cont">
              <table className="carrito__table">
                <thead>
                  <tr>
                    <th>IMAGEN</th>
                    <th>DESCRIPCION</th>
                    <th>ACCION</th>
                  </tr>
                </thead>
                <tbody>
                  {favoritosGuardados.map((articulo) => (
                    <tr key={articulo.id}>
                        <td>
                            <div className="CartImgContainer">
                                <img className="carrito__img" src={process.env.PUBLIC_URL +'/images/'+ articulo.imagenes[0] }  alt="" />
                            </div>
                        </td>
                        <td >
                            <div className="carrito__desc-cont">
                            <div className="carrito__desc">
                            <div className="carrito__bold">{articulo.producto}</div>
                            <div >${parseInt(articulo.precio) }</div>
                            </div>
                        </div>
                        </td>
                        <th>
                        <Link to={"/Articulo/"+articulo.id}>
                        <button className="carrito__btn-borrar">
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                        </Link>
                        <button className="articulo-favorito__btn-borrar" onClick={() => removerFavorito(articulo)}>
                            <FontAwesomeIcon icon={faTrashCan}/>
                        </button>
                        </th>
                    </tr>
                  ))}
                </tbody>
    

              </table>
            </div>
    
            <div className="carrito__terminar">
              <button
                className="carrito__btn-limpiar"
                onClick={limparFavoritos}
              >
                Limpiar Favoritos
              </button>

            </div>
          </div>
            
            )
    }else{
        return (
            <div className="carrito">
              <div className="carrito__titulo">
                <h1>Favoritos</h1>
              </div>
              <div>No se encuentran Productos en Favoritos</div>
              <div className="carrito__comprar">
                <Link to={"/Catalogo/todos"}>
                  <button className="articulo-cantidad__agregar">Agrega Algunos</button>
                </Link>
              </div>
            </div>
          );
        }
    }

export default Favoritos