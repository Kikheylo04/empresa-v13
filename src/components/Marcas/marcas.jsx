"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../sass/_marcas.scss";

export default function Marcas() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(6);
      }
    };

    window.addEventListener("resize", handleResize);

    // Llamada inicial
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="marcas">
      <h2>CLIENTES QUE RESPALDAN NUESTRO LIDERAZGO</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        grabCursor={true}
        className="marcas-slider"
      >
        <SwiperSlide className="swiperslide">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/09/cencosud-300x150.jpg"
              alt="cencosud"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide className="swiperslide">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/09/willax-300x150.jpg"
              alt="willax"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/09/wong-1-300x150.jpg"
              alt="wong"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/09/mediterraneo-300x150.jpg"
              alt="mediterraneo"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/09/sally_beauty-300x150.jpg"
              alt="sally"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <picture>
            <img
              src="https://v13sac.com/wp-content/uploads/2019/09/teleticket-300x150.jpg"
              alt="teleticket"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
      <a href="">Conoce nuestros clientes y casos de éxito</a>
    </div>
  );
}
