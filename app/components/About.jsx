import React from "react";
// import FounderImage from "../../public/image/MuhammadMutahir.jpeg";
import FounderImage from "../../public/image/AbdulKhaliq.jpg";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";

const Noto = Noto_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });

const About = () => {
  return (
    <div
      className=" flex justify-center items-center dark:bg-gray-500 py-10"
      id="About"
    >
      <div className="container mx-auto">
        <div className="text-center space-y-10">
          <Image
            width={100}
            height={100}
            src={FounderImage}
            className="rounded-2xl mx-auto"
            alt="FounderImage"
          />
          <h1
            className="text-[#A2783A] text-4xl md:text-6xl font-bold text-center"
            style={myFont.style}
          >
            Abdul Khaliq
          </h1>
          <h4
            className="text-[#A2783A] text-2xl md:text-4xl font-bold mt-5 text-center"
            style={myFont.style}
          >
            Founder
          </h4>
          <p
            className={` ${Noto.className} px-5 text-justify max-sm:mx-4 mb-8 lg:mb-16 font-light  text-white dark:text-white sm:text-xl`}
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
          >
            Abdul Khaliq, the visionary behind our company, established our
            journey in Karachi back in 2017. With a passion for creating
            unforgettable moments, Abdul Khaliq has led our team to redefine
            event experiences across the city. Our services encompass a wide
            spectrum of celebrations, tailored to meet your every need. From the
            intricate designs of Mehendi to the grandeur of Barat and Valima
            ceremonies, we ensure every detail reflects your unique style and
            essence. Whether it&apos;s a joyous birthday celebration, a blissful
            bridal shower, or a vibrant dholki night, we infuse each event with
            creativity and elegance. Furthermore, our expertise extends beyond
            traditional events to include corporate gatherings such as office
            parties and grand openings, as well as educational institutions
            functions. At Abdul Khaliq Events, we&apos;re dedicated to bringing
            your vision to life, ensuring that every occasion is a true
            reflection of your dreams and aspirations. Let us be a part of your
            journey, creating memories that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
