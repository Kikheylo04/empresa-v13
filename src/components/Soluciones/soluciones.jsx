import React from "react";
import "../../sass/_soluciones.scss";

export default function soluciones() {
  return (
    <div className="soluciones">
      <div className="soluciones_texto">
        <h2>SOLUCIONES</h2>
        <p>
          Brindamos servicios de seguridad durante las 24 horas del día
          preservando la integridad <br /> personal y patrimonial de cada
          operación en diferentes empresas.
        </p>
      </div>
      <div className="soluciones_imagenes">
        <div className="soluciones_imagenes_imagen1">
          <a href="https://v13sac.com/servicios/seguridad-privada/">
            <picture>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1022/1022382.png"
                alt="privada"
              />
            </picture>
            <h2>Seguridad Privada</h2>
            <p className="texto">
              Contamos con un equipo de profesionales para proteger a tus
              clientes y establecimiento.
            </p>
            <p className="enlace">Ver más</p>
          </a>
        </div>
        <div className="soluciones_imagenes_imagen2">
          <a href="https://v13sac.com/servicios/vigilancia-electronica/">
            <picture>
              <img
                src="https://v13sac.com/wp-content/uploads/2019/03/vigilancia.png"
                alt="electronica"
              />
            </picture>
            <h2>Seguridad Electrónica</h2>
            <p className="texto">
              Adaptamos la tecnología de nuestros equipos a las necesidades de
              tu establecimiento con el monitoreo profesional de nuestros
              especialistas.
            </p>
            <p className="enlace">Ver más</p>
          </a>
        </div>
        <div className="soluciones_imagenes_imagen3">
          <a href="https://v13sac.com/servicios/consultores-en-seguridad/">
            <picture>
              <img
                src="https://v13sac.com/wp-content/uploads/2019/03/consultation1.png"
                alt="eventos"
              />
            </picture>
            <h2>Seguridad de Eventos</h2>
            <p className="texto">
              Asesoramos desde la planificación y la ejecución de tu evento.
            </p>
            <p className="enlace">Ver más</p>
          </a>
        </div>
      </div>
      <div className="soluciones_button-agenda">
        <a href="https://v13sac.com/contacto/">
          <span type="submit">Agenda una cita con un asesor</span>
        </a>
      </div>
    </div>
  );
}
