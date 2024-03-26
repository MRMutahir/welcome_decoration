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
    <div className="container mx-auto py-10 flex  flex-col  items-center justify-center h-screen">
      <h1
        className="text-[#A2783A] text-4xl md:text-6xl font-bold text-center"
        // data-aos="fade-right"
        style={myFont.style}
      >
        Why
      </h1>
      <Image
        src={WellComeLogo}
        alt="welcome decoration"
        width={500}
        height={500}
        // data-aos="fade-left"
      />
      <div
        className="font-light text-center text-white dark:text-white sm:text-xl"
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
      >
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
