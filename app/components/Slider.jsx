import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import ImageOne from "../../public/image/imgOne.jpg";
import ImageTwo from "../../public/image/imgThree.jpg";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
  const handleHover = () => {
    console.log("Hovered or focused!");
  };
  return (
    <>
      {/* <motion.div
        // key={index}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.18}
        onHoverStart={handleHover}
        onFocus={handleHover}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{
          cursor: "grabbing",
        }}
      >
       
      </motion.div> */}
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
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <Image
            src={ImageOne}
            alt="ImageOne"
            className="object-cover w-full h-full rounded-2xl"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageTwo}
            alt="ImageTwo"
            className="object-cover w-full h-full rounded-2xl"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageThree}
            alt="ImageThree"
            className="object-cover w-full h-full rounded-2xl"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageFour}
            alt="ImageFour"
            className="object-cover w-full h-full rounded-2xl"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
