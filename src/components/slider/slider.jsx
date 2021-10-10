import React from "react";
import SwiperCore, {Autoplay, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import Slide from "../slide/slide";
import {SLIDER_DELAY, Slides} from "../../const";

SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {

  return (
    <section>
      <h2 className="visually-hidden">Предложения банка</h2>
      <Swiper
        className="slider"
        centeredSlides
        autoplay={{ delay: SLIDER_DELAY, disableOnInteraction: false }}
        pagination={{clickable: true}}
        preloadImages={false}
        loop={true}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={`${slide.id}-${slide.title}`}>
            <Slide
              data={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
