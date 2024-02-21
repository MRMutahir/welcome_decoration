// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import ImageOne from "../../public/image/HM1.jpg";
// import ImageTwo from "../../public/image/HM5.jpg";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// export default function Slider() {
//   return (
//     <>
//       <Swiper
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper relative"
//         id="Home"
//       >
//         <SwiperSlide>F
//           <Image src={ImageTwo} className="w-full h-full" alt="image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={ImageOne} className="w-full h-screen" alt="image" />
//         </SwiperSlide>
//         {/* <div className="absolute top-0 z-10 flex flex-col items-center justify-center">
//           <h1 className="text-4xl text-[#A2783A]  font-bold  italic">
//             Celebrating Dreams,
//           </h1>
//           <p>
//             We believe that it is all about the BIG DREAMS and the small
//             details!
//           </p>
//         </div> */}
//       </Swiper>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import ImageOne from "../../public/image/imageOne.jpg";
import ImageTwo from "../../public/image/imageTwo.jpg";
import ImageThree from "../../public/image/ImageThree.jpg";
import ImageFour from "../../public/image/ImageFour.jpg";

// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

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
