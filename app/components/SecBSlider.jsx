import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const SecBSlider = () => {
  return (
    <div>
      {" "}
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            width={400}
            height={400}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecBSlider;
