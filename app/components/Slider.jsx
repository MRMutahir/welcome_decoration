import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ImageOne from "../../public/image/HM1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image
            src={ImageOne}
            className="w-full h-screen absolute"
            alt="image"
          />

          <div className="relative top-0">
            <h1 className="text-4xl text-[#A2783A]  font-bold  italic">
              Celebrating Dreams,
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} className="w-full h-screen" alt="image" />
          <div className="">
            <p>
              We believe that it is all about the BIG DREAMS and the small
              details!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
