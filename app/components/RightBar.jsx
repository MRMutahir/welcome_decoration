"use client";
import React, { useEffect, useRef, useState } from "react";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import Why from "./Why";
import About from "./About";
import Contact from "./Contact";
import Slider from "./Slider";
import SecBSlider from "./SecBSlider";
const Noto = Noto_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
// const Bree = Bree_Serif{ subsets: ["latin"] });
// console.log(inter, ">>>>>>>>>>>>>>>>>inter");
// console.log(Noto, ">>>>>>>>>>>>>>>>>inter");
// bg-[#FFF7EA]
// console.log(Noto_Sans, "Noto_Sans>>>>>>>>>>>>>>>>>>>>>>");
const RightBar = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      {" "}
      <div className="container mx-auto  flex  justify-between items-center w-full h-screen">
        <div
          className="w-96 flex  flex-col justify-end"
          // data-aos="fade-right"
        >
          <h1
            className={`text-6xl text-[#A2783A] font-medium`}
            style={myFont.style}
          >
            Celebrating Dreams,
          </h1>
          <p className={`${Noto.className} font-normal leading-8`}>
            Welcome to welcome decoration , where beauty meets functionality.
            Explore our curated collection of decor pieces and furniture to
            elevate your space. From timeless elegance to stunning events, were
            here to inspire you and provide personalized service every step of
            the way. Shop with confidence and create something extraordinary
            with us today.
          </p>
          <button className="btn btn-neutral">Book Now</button>
        </div>
        <div
          className="w-96"
          //  data-aos="fade-left"
        >
          <Slider />
        </div>
      </div>
      <SecBSlider />
      <Why />
      <About />
      <Contact />
    </>
    // <div className="container w-full h-screen">

    //   <div
    //     className="h-full w-full"
    //     // data-aos="fade-up"
    //     data-aos-anchor-placement="top-center"
    //   >
    //     <SecBSlider />
    //   </div>
    //   <div
    //     className="h-full w-full"
    //     // data-aos="fade-up"
    //     // data-aos-anchor-placement="top-center"
    //   >
    //     {" "}
    //     <Why />
    //   </div>
    //   <div
    //     className="h-full w-full"
    //     // data-aos="fade-up"
    //     // data-aos-anchor-placement="top-center"
    //   >
    //     {" "}
    //     <About />
    //   </div>
    //   <div
    //     className="h-full w-full"
    //     // data-aos="fade-up"
    //     // data-aos-anchor-placement="top-center"
    //   >
    //     {" "}
    //     <Contact />
    //   </div>
    // </div>
  );
};

export default RightBar;

{
  /* <div>
            <h4 className="text-2xl  font-normal">Crafting Memories.</h4>
          </div>
          <div>
            <p>
              We believe that it is all about the BIG DREAMS and the small
              details!
            </p>
          </div> */
}
