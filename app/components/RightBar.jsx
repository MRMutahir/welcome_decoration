"use client";
import React from "react";
import Why from "./Why";
import About from "./About";
import Contact from "./Contact";
import Slider from "./Slider";

const RightBar = () => {
  return (
    <div className="rightBar overflow-auto w-screen h-screen">
      <div className="flex items-center  justify-center w-full h-full secA container max-lg:flex-col ">
        {/* <div className="hidden max-md:block max-md:flex max-md:justify-end">
          <GiHamburgerMenu />
        </div> */}

        {/* <div className="flex flex-col gap-4  px-20 py-16 rounded-lg rounded-t-none max-lg:items-center">
          <div>
            <h1 className="text-4xl text-[#A2783A]  font-bold  italic">
              Celebrating Dreams,
            </h1>
          </div>
          <div>
            <h4 className="text-2l  font-normal">Crafting Memories.</h4>
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
        </div> */}
        <div className="w-full h-full">
          {/* <SecASlider /> */}
          <Slider />
        </div>
      </div>
      <Why />
      <About />
      <Contact />
    </div>
  );
};

export default RightBar;
