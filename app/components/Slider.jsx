import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import ImageOne from "../../public/image/imgOne.jpg";
import ImageTwo from "../../public/image/imgTwo.jpg";
import ImageThree from "../../public/image/imgThree.jpg";
import ImageFour from "../../public/image/imgFour.jpg";
import {
  EffectCube,
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
export default function Slider() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <Image
            src={ImageOne}
            alt="ImageOne"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageTwo}
            alt="ImageTwo"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageThree}
            alt="ImageThree"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageFour}
            alt="ImageFour"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
