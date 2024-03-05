"use client";
import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import servicesImgOne from "../../public/image/servicesImgOne.jpg";
import servicesImgTwo from "../../public/image/servicesImgTwo.jpg";
import servicesImgthree from "../../public/image/servicesImgthree.jpg";
import servicesImgFour from "../../public/image/servicesImgFour.jpg";
import servicesImgfive from "../../public/image/servicesImgfive.jpg";
import servicesImgSix from "../../public/image/servicesImgSix.jpg";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
const Noto = Noto_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
const Services = () => {
  let names = [
    "Barat",
    "Valima",
    "Rasme",
    "Hina",
    "Dholki",
    "Engagement",
    "Birthday",
    "Special",
    "Ceremonies",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // console.log(nameArr, ">>>>>>>>>>>>>");
  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col justify-center items-center ">
        {/* <video
          // src="/video/video.mp4"
          // src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2Fvideo.mp4?alt=media&token=d634aedf-3222-46cc-b05b-9c9b8e070f53"
          className="h-screen object-cover fixed"
          // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/video%2Fvideotwo.MP4?alt=media&token=f509730f-d67a-48f6-8793-8c26ba69acf6"
          autoPlay
          loop
          muted
          // style={{ maxWidth: "100vw", height: "auto" }
        ></video> */}
        <div className="flex items-center justify-center flex-col my-10 gap-6">
          <h1
            className="text-7xl font-semibold font-mono text-[#A2783A]"
            style={myFont.style}
          >
            Our Services
          </h1>
          <h1 className="my-4 text-5xl">{names[index]}</h1>

          <p className={`${Noto.className} my-4  font-normal`}>
            At welcome decoration, we provide a wide range of services to make
            your celebrations extraordinary. Contact us to learn more!
          </p>
        </div>
        <div className="h-full">
          <ServicesCard
            title={"Barat"}
            para={
              "Experience the grandeur and elegance of traditional Barat ceremonies, meticulously planned to perfection"
            }
            img={servicesImgOne}
          />
        </div>
        {/* <div className="h-full grid grid-cols-3 gap-4 mb-10">
        
          <ServicesCard
            title={"Valima"}
            para={
              "Indulge in the celebration of love and unity with our exquisite Valima arrangements, crafted with sophistication and grace."
            }
            img={servicesImgTwo}
          />
          <ServicesCard
            title={"Rasme hina"}
            para={
              "Embrace the cultural richness and joyful traditions of Rasme Hina, where every detail reflects the vibrancy of this auspicious occasion"
            }
            img={servicesImgthree}
          />
          <ServicesCard
            title={"Dholki"}
            para={
              "Get ready to groove and celebrate with our lively Dholki events, filled with music, laughter, and unforgettable moments."
            }
            img={servicesImgFour}
          />
          <ServicesCard
            title={"Engagement"}
            para={
              "Celebrate the beginning of a beautiful journey with our tailored engagement ceremonies, blending romance and excitement seamlessly"
            }
            img={servicesImgfive}
          />
          <ServicesCard
            title={"Birthday"}
            para={
              "Create cherished memories with our vibrant birthday celebrations, tailored to delight guests of all ages with fun-filled activities and delectable treats"
            }
            img={servicesImgSix}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
