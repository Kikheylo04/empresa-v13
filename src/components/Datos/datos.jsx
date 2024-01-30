import React from "react";
import "../..//sass/_datos.scss";
export default function datos() {
  return (
    <div className="datos">
      <div className="subtitulo">
        <h2>REALES PROFESIONALES EN SEGURIDAD</h2>
      </div>
      <section>
        <div className="dato">
          <div className="imagen">
            <picture>
              <img
                src="https://v13sac.com/wp-content/uploads/2019/09/experiencia_en_seguridad.svg"
                alt=""
              />{" "}
            </picture>
          </div>
          <div className="texto">
            <p>21 años de experiencia</p>
            <p>
              Somos una empresa 100% peruana. Contamos con experiencia a nivel
              nacional en soluciones integrales de seguridad, resguardo y
              asesoría legal.
            </p>
          </div>
        </div>
        <div className="dato">
          <div className="imagen">
            <picture>
              <img
                src="https://v13sac.com/wp-content/uploads/2019/09/certificaciones_iso.svg"
                alt=""
              />
            </picture>
          </div>
          <div className="texto">
            <p>Certificaciones ISO</p>
            <p>
              Nuestras certificaciones son emitidas por la NQA Global
              Accredited, avalamos nuestros procesos de seguridad con el ISO
              9001, 14001 , 18001 y 37001.
            </p>
          </div>
        </div>
        <div className="dato">
          <div className="imagen">
            <picture>
              <img
                src="https://v13sac.com/wp-content/uploads/2019/09/cobertura_nacional_seguridad.svg"
                alt=""
              />
            </picture>
          </div>
          <div className="texto">
            <p>Cobertura Nacional</p>
            <p>
              Tenemos presencia operativa en 10 provincias del Perú, contamos
              con presencia en Piura, Chiclayo, Cajamarca, Trujillo, Chimbote,
              Huánuco, Ica y Arequipa.
            </p>
          </div>
        </div>
        <div className="dato">
          <div className="imagen">
            <picture>
              <img
                src="https://v13sac.com/wp-content/uploads/2019/09/policy.svg"
                alt=""
              />
            </picture>
          </div>
          <div className="texto">
            <p>Pólizas de seguros</p>
            <p>
              Cobertura para responsabilidad civil, 3D (Deshonestidad,
              desaparición y destrucción), seguro complementario de trabajo de
              riesgo (SCTR) y seguros de vida.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
