import React from "react";
import "../../sass/_navbar.scss";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <picture>
          <img
            src="https://v13sac.com/wp-content/uploads/2019/09/LOGO-OFICIAL-COLORES-01.png"
            alt=""
          />
        </picture>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Soluciones de Seguridad</a>
          </li>
          <li>
            <a href="">Clientes</a>
          </li>
          <li>
            <a href="">Trabaja en V13</a>
          </li>
        </ul>
        <button>Contáctanos</button>
      </div>
    </div>
  );
}
