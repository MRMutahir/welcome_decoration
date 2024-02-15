"use client";
// import birthday from "../../../public/birthday.webp";
// import Mhendi from "../../../public/mhendi.jpg";
// import Weddingvideo from "../../../public/Weddingvideo.mp4";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import DemoCarousel from "./Carusole";
import WellComeLogo from "../../public/image/img.svg";
import sliderone from "../../public/image/HM1.jpg";
import slidertwo from "../../public/image/HM5.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

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
                // src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/Logo%2FWELCOMElogo.svg?alt=media&token=043a1e4e-04a0-4a21-afe9-8186edcc399c"
                src={WellComeLogo}
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
      <div className="rightBar overflow-auto bg-[#FFF7EA] w-screen h-[100vh] relative flex items-center justify-center">
        <div className="absolute flex flex-col gap-4 bg-[#FFFFFF] px-20 py-10 rounded-lg">
          {" "}
          <div>
            <h1 className="text-4xl text-[#A2783A]  font-bold  italic">Dream Maker</h1>
          </div>
          <div>
            <h4 className="text-2l  font-normal">YOUR PERSONAL DREAM MAKER</h4>
          </div>
          <div>
            <p>
              We believe that it is all about the BIG DREAMS and the small
              details!
            </p>
          </div>
          <div>
            <button className="btn btn-neutral">Book Now</button>
          </div>
        </div>
        <Swiper
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
        </Swiper>
        <section>
          <video
            // src="/video/video.mp4"
            src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2Fvideo.mp4?alt=media&token=d634aedf-3222-46cc-b05b-9c9b8e070f53"
            autoPlay
            loop
            muted
            style={{ maxWidth: "100%", height: "auto" }}
          >
            Your browser does not support the video tag.
          </video>
        </section>
      </div>

    </div>
  );
};

export default Main;
