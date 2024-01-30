import React from "react";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook-f";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import "../../sass/_footer.scss";
export default function footer() {
  const data = [
    {
      img: "https://v13sac.com/wp-content/uploads/2022/10/icons8-telefono-sonando-48-e1664913612809.png",
      text: "(01) 211 9160 Anexo 165",
    },
    {
      img: "https://v13sac.com/wp-content/uploads/2022/10/icons8-iphone-30-3.png",
      text: "989 199 040 /998 109 345 /991 916 143",
    },
    {
      img: "https://v13sac.com/wp-content/uploads/2022/10/icons8-correo-48-e1664912411817.png",
      text: " comercial@v13sac.com",
    },
    {
      img: "https://v13sac.com/wp-content/uploads/2022/10/icons8-direccion-48-e1664912560411.png",
      text: "Calle Cerro Colorido 163, San Borja",
    },
  ];
  const nosotros = [
    {
      text: "V13 S.A.C.",
    },
    {
      text: "Trabaja con nosotros",
    },
    {
      text: "Políticas",
    },
    {
      text: "Sistema Integrado de Gestión",
    },
    {
      text: "Sistema de Gestión Antisoborno",
    },
    {
      text: "Política y Procedimiento de Investigación por casos de Hostigamiento Sexual",
    },
  ];
  const seguridades = [
    { text: "Seguridad Privada" },
    { text: "Seguridad Electrónica" },
    {
      text: "Seguridad de Eventos",
    },
  ];
  const soluciones = [
    {
      text: "Clientes",
    },
    {
      text: "Contacto",
    },
  ];
  const icono = {
    icon: "<",
  };
  return (
    <div className="footer">
      <div className="secciones">
        <section className="seccion1">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/10/LOGO-OFICIAL-BLANCO-OFICIAL-01.png"
              alt=""
            />
          </picture>
          <p>Comunícate con nuestros asesores comerciales</p>
          {data.map((dat, index) => {
            return (
              <div key={index} className="footer-data">
                <picture>
                  <img src={dat.img} alt="" />
                </picture>
                <span>{dat.text}</span>
              </div>
            );
          })}
          <picture className="redes-sociales">
            <Facebook /> <p>-</p> <Linkedin /> <p>-</p>
            <Instagram />
          </picture>
        </section>
        <section className="seccion2">
          <p>Nosotros</p>
          {nosotros.map((nosotro, index) => {
            return (
              <div key={index} className="nosotro">
                <a href="">{nosotro.text}</a>
              </div>
            );
          })}
        </section>
        <section className="seccion3">
          <p>Soluciones de Seguridad</p>
          {seguridades.map((seguridad, index) => {
            return (
              <div key={index} className="seguridad">
                <a href="">{seguridad.text}</a>
              </div>
            );
          })}
        </section>
        <section className="seccion4">
          <p>Confía en nosotros</p>
          {soluciones.map((solucion, index) => {
            return (
              <div key={index} className="solucion">
                <a href="">{solucion.text}</a>
              </div>
            );
          })}
        </section>
      </div>
      <div className="creditos">
        <p>
          © 2010-2018 Todos los derechos reservados por v13sac.com
          <br />
          Hecho por Hub Creativa con {icono.icon}3
        </p>
      </div>
    </div>
  );
}
