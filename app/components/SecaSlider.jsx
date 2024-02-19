import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import sliderone from "/public/image/HM1.jpg";
import slidertwo from "/public/image/HM5.jpg";
import bgFlower from "/public/image/bgFlower.webp";
import "./SecaSlider.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

export default function SecASlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-72 h-72"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {/* <SwiperSlide><Image /></SwiperSlide>
                <SwiperSlide><Image /></SwiperSlide>
                <SwiperSlide><Image /></SwiperSlide>
                <SwiperSlide><Image /></SwiperSlide>
                <SwiperSlide><Image /></SwiperSlide> */}
      </Swiper>
    </>
  );
}
