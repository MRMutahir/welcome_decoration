import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import Image from "next/image";
import ImageOne from "../../public/image/imgOne.jpg";
import ImageTwo from "../../public/image/imgTwo.jpg";
import ImageThree from "../../public/image/imgThree.jpg";
import ImageFour from "../../public/image/imgFour.jpg";
const SecBSlider = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-screen">
      <h1 className="text-6xl font-medium my-36">Your Story is Ours</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper w-full h-96 mx-auto overflow-hidden"
      >
        <SwiperSlide>
          <Image
            src={ImageOne}
            alt="ImageOne"
            className="w-2/4 mx-auto h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageTwo}
            alt="ImageTwo"
            className="w-2/4 mx-auto h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageThree}
            alt="ImageThree"
            className="w-2/4 mx-auto h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageFour}
            alt="ImageFour"
            className="w-2/4 mx-auto h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecBSlider;
