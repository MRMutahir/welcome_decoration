"use client";
import React, { useRef, useState } from "react";
import Why from "./Why";
import About from "./About";
import Contact from "./Contact";
import Slider from "./Slider";
import SecBSlider from "./SecBSlider";
const RightBar = () => {
  return (
    <div className="rightBar w-screen h-screen">
      <div className="flex items-center justify-center w-full h-full secA container max-lg:flex-col ">
        <div className="flex flex-col px-20 gap-4 rounded-lg rounded-t-none max-lg:items-center">
          <h1 className="text-4xl text-[#A2783A]  font-bold">
            Celebrating Dreams,
          </h1>
          <p className="py-10 w-96">
            Welcome to welcome decoration , where beauty meets functionality.
            Explore our curated collection of decor pieces and furniture to
            elevate your space. From timeless elegance to stunning events, were
            here to inspire you and provide personalized service every step of
            the way. Shop with confidence and create something extraordinary
            with us today.
          </p>
          <button className="btn btn-neutral ">Book Now</button>
        </div>
        <div className="w-96 h-96">
          <Slider />
        </div>
      </div>
      <SecBSlider />
      <Why />
      <About />
      <Contact />
    </div>
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
