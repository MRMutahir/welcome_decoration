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
    <div className="container mx-auto mt-20 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex  flex-col items-center gap-2">
      <h1
        className="text-[#A2783A] text-4xl md:text-6xl font-bold"
        style={myFont.style}
      >
        Why
      </h1>
      <div className="">
        <Image
          src={WellComeLogo}
          alt="welcome decoration"
          width={500}
          height={500}
        />
      </div>
      <div className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        <Item>
          Welcome Decoration transforms your celebrations into unforgettable
          experiences.
        </Item>
        <Item>
          Experience the magic of meticulous planning and breathtaking décor.
        </Item>
        <Item>
          With Welcome Decoration, every moment becomes a cherished memory.
        </Item>
        <Item>
          From intimate gatherings to grand events, we craft your dreams into
          reality.
        </Item>
        <Item>
          Trust us to elevate your special occasions with creativity and
          elegance.
        </Item>
        <Item>Where every celebration sparkles with joy and elegance.</Item>
      </div>
    </div>
  );
};

const Item = ({ children }) => (
  <>
    {/* {console.log(children, ">>>>>>>>>>>")} */}
    <div className="flex items-center  gap-5 max-sm:mx-3">
      <span>
        <FaSquareCheck />
      </span>
      <h4 style={myFont.style}>{children}</h4>
    </div>
  </>
);

export default Why;
