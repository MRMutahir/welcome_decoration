"use client";
import React, { useEffect, useRef, useState } from "react";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import Why from "./Why";
import About from "./About";
import Contact from "./Contact";
import Slider from "./Slider";
import SecBSlider from "./SecBSlider";
// const Noto = Noto_Sans({ subsets: ["latin"] });
// const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
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
      <div class="  container mx-auto my-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div class="text-center space-y-5">
          <h1 class="text-[#A2783A] font-extrabold text-5xl md:text-4xl lg:text-5xl">
            Celebrating Dreams,
          </h1>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl leading-8">
            Welcome to welcome decoration, where beauty meets functionality.
            Explore our curated collection of decor pieces and furniture to
            elevate your space. From timeless elegance to stunning events, we're
            here to inspire you and provide personalized service every step of
            the way. Shop with confidence and create something extraordinary
            with us today.
          </p>
          <button class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-80052">
            Book Now
          </button>
        </div>
        <div class="mx-auto my-10 max-w-screen-md max-sm:mx-5">
          <Slider />
        </div>
      </div>
      {/* <div className="container max-sm:my-10">
        <div className="text-center space-y-5">
          <h1
            className={`text-[#A2783A] max-sm:font-normal max-sm:text-5xl font-extrabold`}
            // style={myFont.style}
          >
            Celebrating Dreams,
          </h1>
          <p
            // className={`${Noto.className}font-normal leading-8`}
            className="max-sm:leading-8 text-balance"
          >
            Welcome to welcome decoration , where beauty meets functionality.
            Explore our curated collection of decor pieces and furniture to
            elevate your space. From timeless elegance to stunning events, were
            here to inspire you and provide personalized service every step of
            the way. Shop with confidence and create something extraordinary
            with us today.
          </p>
          <button className="btn btn-neutral max-sm:w-28 text-center">
            Book Now
          </button>
        </div>
        <div
          className=" max-sm:w-64  max-sm:mx-auto max-sm:my-10"
          //  data-aos="fade-left"
          >
          <Slider />
        
        </div>
      </div> */}
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
