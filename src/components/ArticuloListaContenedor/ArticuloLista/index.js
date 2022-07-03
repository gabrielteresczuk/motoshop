import React from "react";
import Articulo from "../Articulo";
import "./ArticuloLista.css";

function ArticuloLista({ articulos }) {
  return (
    <div className="articulo-lista">
      {
        articulos.map((articulo) => (
          <Articulo key={articulo.id} articulo={articulo} />
        ))
      }
    </div>
  );
}

export default ArticuloLista;
