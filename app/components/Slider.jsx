import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import imgone from "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg";
// import imageTwo from "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg";
// Import Swiper styles
import ImageOne from "../../public/image/HM1.jpg";
// import video from "../../public/video/videoone.MP4";
import "swiper/css";
import "swiper/css/navigation";
import "../globals.css";
// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image src={ImageOne} className="w-full h-screen absolute" />
          {/* <video
            // src="/video/video.mp4"
            src="../../public/video/videoone.MP4"
            autoPlay
            loop
            muted
            style={{ maxWidth: "100%", height: "auto" }}
            className="absolute"
          >
            Your browser does not support the video tag.
          </video> */}
          <div className="relative top-0">
            <h1 className="text-4xl text-[#A2783A]  font-bold  italic">
              Celebrating Dreams,
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} className="w-full h-screen" />
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
