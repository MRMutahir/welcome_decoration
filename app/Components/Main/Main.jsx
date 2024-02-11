"use client";
// import WellComeLogo from "/public/WELCOMElogo.svg";
// import birthday from "../../../public/birthday.webp";
// import Mhendi from "../../../public/mhendi.jpg";
// import Weddingvideo from "../../../public/Weddingvideo.mp4";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import VideoPlayer from "../VideoPlayer";
// import DemoCarousel from "./Carusole";

const Main = () => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  return (
    <div className="flex">
      <div className="sideBar">
        <div className="fixed bg-[#FFF7EA] h-[100vh] w-[20%] flex justify-around flex-col items-center">
          <div className="flex flex-col  items-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter">
                welcome decoration
              </h1>
            </div>
            <div className="">
              {" "}
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/Logo%2FWELCOMElogo.svg?alt=media&token=043a1e4e-04a0-4a21-afe9-8186edcc399c"
                width={200}
                height={200}
                alt="welcome decoration"
              />
            </div>
          </div>
          <div>
            <ul className="list-none text-center flex flex-col gap-5">
              <li className="text-[#A2783A] text-2xl font-normal font-serif">
                Home
              </li>
              <li className="text-[#A2783A] text-2xl font-normal font-serif">
                Services
              </li>
              <li className="text-[#A2783A] text-2xl font-normal font-serif">
                Why
              </li>
              <li className="text-[#A2783A] text-2xl font-normal font-serif">
                About
              </li>
              <li className="text-[#A2783A] text-2xl font-normal font-serif">
                Cotact
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between gap-4">
              <li>
                <FaFacebookF className="text-[#A2783A] w-14 h-9" />
              </li>
              <li>
                <FaLinkedinIn className="text-[#A2783A] w-14 h-9" />
              </li>
              <li>
                <FaInstagram className="text-[#A2783A] w-14 h-9" />
              </li>
              <li>
                <BsWhatsapp className="text-[#A2783A] w-14 h-9" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightBar overflow-auto bg-[#FFF7EA] w-screen h-[100vh]">
        <VideoPlayer />
      </div>

      {/* <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={Weddingvideo} className="h-fit" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={birthday} className="h-fit" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Mhendi} className="h-fit" />
          </SwiperSlide>
        </Swiper> */}
    </div>
  );
};

export default Main;
