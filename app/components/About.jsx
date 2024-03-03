import React from "react";
import FounderImage from "../../public/image/MuhammadMutahir.jpeg";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
const Noto = Noto_Sans({ subsets: ["latin"] });

const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
const About = () => {
  return (
    <div
      // flex justify-center items-center flex-col gap-4 w-full h-scree
      className="container mx-auto mt-20 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl space-y-10"
      id="About"
    >
      <div className="">
        {" "}
        <Image
          width={100}
          height={100}
          src={FounderImage}
          className="rounded-2xl mx-auto"
          alt="FounderImage"
        />
      </div>
      <div className="text-center">
        {/* flex gap-4 flex-col */}
        <h1
          className="text-[#A2783A] text-4xl md:text-6xl font-bold"
          style={myFont.style}
        >
          {/* text-6xl font-extrabold */}
          Muhammad Mutahir
        </h1>
        <h4
          className="text-[#A2783A] text-2xl md:text-4xl font-bold mt-5"
          style={myFont.style}
        >
          {/* text-2xl font-semibold */}
          Founder
        </h4>
      </div>
      <div className="">
        {/* w-[50rem] max-lg:w-[40rem] */}
        <p
          className={` ${Noto.className} text-justify max-sm:mx-4 mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl`}
          // text-center  w-full
        >
          Abdul Khaliq, the visionary behind our company, established our
          journey in Karachi back in 2017. With a passion for creating
          unforgettable moments, Abdul Khaliq has led our team to redefine event
          experiences across the city. Our services encompass a wide spectrum of
          celebrations, tailored to meet your every need. From the intricate
          designs of Mehendi to the grandeur of Barat and Valima ceremonies, we
          ensure every detail reflects your unique style and essence. Whether
          it&apos;s a joyous birthday celebration, a blissful bridal shower, or
          a vibrant dholki night, we infuse each event with creativity and
          elegance. Furthermore, our expertise extends beyond traditional events
          to include corporate gatherings such as office parties and grand
          openings, as well as educational institutions functions. At Abdul
          Khaliq Events, we&apos;re dedicated to bringing your vision to life,
          ensuring that every occasion is a true reflection of your dreams and
          aspirations. Let us be a part of your journey, creating memories that
          last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default About;
