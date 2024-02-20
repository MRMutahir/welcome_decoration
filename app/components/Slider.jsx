import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ImageOne from "../../public/image/HM1.jpg";
import ImageTwo from "../../public/image/HM5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper relative"
        id="Home"
      >
        <SwiperSlide>
          <Image src={ImageTwo} className="w-full h-full" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} className="w-full h-screen" alt="image" />
        </SwiperSlide>
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#A2783A]  font-bold  italic">
            Celebrating Dreams,
          </h1>
          <p>
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
        </div>
      </Swiper>
    </>
  );
}
