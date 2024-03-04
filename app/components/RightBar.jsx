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
import Footer from "./Footer";
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
      <div class="container mx-auto pt-10 max-md:space-y-10  md:flex md:flex-col md:justify-center">
        <div class="text-center space-y-10">
          <h1 class="text-[#A2783A] font-extrabold text-5xl md:text-4xl lg:text-5xl">
            Celebrating Dreams,
          </h1>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl leading-8 mx-3">
            Welcome to welcome decoration, where beauty meets functionality.
            Explore our curated collection of decor pieces and furniture to
            elevate your space. From timeless elegance to stunning events,
            we&apos;re here to inspire you and provide personalized service
            every step of the way. Shop with confidence and create something
            extraordinary with us today.
          </p>
          <button class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-80052">
            Book Now
          </button>
        </div>
        <div class="mx-auto my-10 max-w-screen-md max-sm:mx-5">
          <Slider />
        </div>
      </div>
      <SecBSlider />
      <Why />
      <About />
      <Contact />
      <Footer />
    </>
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
