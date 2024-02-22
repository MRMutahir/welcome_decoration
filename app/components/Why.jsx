import React from "react";
import Image from "next/image";
import WellComeLogo from "../../public/image/img.svg";
import { FaSquareCheck } from "react-icons/fa6";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
const Noto = Noto_Sans({ subsets: ["latin"] });

const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
const Why = () => {
  return (
    <div
      className="flex items-center justify-center gap-4 flex-col w-full  h-full"
      id="Why"
    >
      <div className="flex justify-center items-center ">
        <h1 className="text-8xl font-bold text-[#A2783A]" style={myFont.style}>
          Why
        </h1>
        <div className="">
          <Image
            src={WellComeLogo}
            // width={200}
            // height={200}
            alt="welcome decoration"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex  flex-col gap-6">
        <div className="flex gap-4 items-center ">
          <span>
            <FaSquareCheck />
          </span>
          <h4 style={myFont.style}>
            {" "}
            Welcome Decoration transforms your celebrations into unforgettable
            experiences.
          </h4>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <FaSquareCheck />
          </span>
          <h4 style={myFont.style}>
            {" "}
            Experience the magic of meticulous planning and breathtaking décor.
          </h4>
        </div>
        <div
          className="flex gap-4 items-center
        "
        >
          <span>
            <FaSquareCheck />
          </span>
          <h4 style={myFont.style}>
            {" "}
            With Welcome Decoration, every moment becomes a cherished memory.
          </h4>
        </div>

        <div className="flex gap-4 items-center">
          <span>
            <FaSquareCheck />
          </span>
          <h4 style={myFont.style}>
            {" "}
            From intimate gatherings to grand events, we craft your dreams into
            reality.
          </h4>
        </div>

        <div
          className="flex gap-4 items-center
        "
        >
          <span>
            <FaSquareCheck />
          </span>
          <h4 style={myFont.style}>
            {" "}
            Trust us to elevate your special occasions with creativity and
            elegance.
          </h4>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <FaSquareCheck />
          </span>
          <h4 style={myFont.style}>
            Where every celebration sparkles with joy and elegance.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Why;
