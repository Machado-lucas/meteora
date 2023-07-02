/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import styles from './Banner.module.css';

function Banner({ dispositivo }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  function mudarImagem(direcao) {
    const novoIndex = (index + direcao + 3) % 3;
    console.log(novoIndex);
    setIndex(novoIndex);
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={`/assets/Banner/${dispositivo}/bannerCarousel0.png`} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/assets/Banner/${dispositivo}/bannerCarousel1.png`} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/assets/Banner/${dispositivo}/bannerCarousel2.png`} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
