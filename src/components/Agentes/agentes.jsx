"use client";
import React from "react";
import "../../sass/_agentes.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function agentes() {
  const pages = [
    {
      img: "https://allianceenterprise.com/wp-content/uploads/2020/05/comillas-png-abre-e1589493846269-300x233.png",
      page: "Un agente de seguridad V13, evitó la propagación de un incendio originado en la cocina del establecimiento, previniendo y resguardando la vida de 40 personas alrededor. Nuestro agente de seguridad V13, fue debidamente capacitado en el manejo de extintores, lo cual le permitió manejar la situación y ser reconocido por su valerosa acción.",
    },
    {
      img: "https://allianceenterprise.com/wp-content/uploads/2020/05/comillas-png-abre-e1589493846269-300x233.png",
      page: "Un agente de seguridad de V13, logró poner al descubierto una banda de “tenderos” que trabajaban al interior de una tienda deportiva, gracias a un trabajo de investigación se logró desarticular a estos malos elementos que generaban miles de soles en pérdidas.",
    },
    {
      img: "https://allianceenterprise.com/wp-content/uploads/2020/05/comillas-png-abre-e1589493846269-300x233.png",
      page: "Dentro de las instalaciones de uno de nuestros clientes del norte, un visitante intentó quitarse la vida al lanzarse desde el segundo piso del edificio. Uno de los agentes de seguridad V13, rápidamente socorrió a la persona luego del incidente, de esta manera se evitó unfatal desenlace, gracias a la debida capacitación en primeros auxilios.",
    },
  ];
  return (
    <div className="agentes">
      <h2>AGENTES EN ACCIÓN</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true, verticalClass: "30px" }}
      >
        {pages.map((page, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="agentes-text">
                <picture>
                  <img src={page.img} alt="" />
                </picture>
                <span>{page.page}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
