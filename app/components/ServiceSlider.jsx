"use client";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import servicesImgOne from "../../public/image/servicesImgOne.jpg";
import servicesImgTwo from "../../public/image/servicesImgTwo.jpg";
import servicesImgthree from "../../public/image/servicesImgthree.jpg";
import servicesImgFour from "../../public/image/servicesImgFour.jpg";
import servicesImgfive from "../../public/image/servicesImgfive.jpg";
import servicesImgSix from "../../public/image/servicesImgSix.jpg";
import Image from "next/image";
// import ServiceSwipper from "./ServiceSwipper";

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([
    {
      heading: "Valima",
      description:
        "Indulge in the celebration of love and unity with our exquisite Valima arrangements, crafted with sophistication and grace.",
      image: servicesImgOne,
    },
    {
      heading: "Rasme hina",
      description:
        "Embrace the cultural richness and joyful traditions of Rasme Hina, where every detail reflects the vibrancy of this auspicious occasion.",
      image: servicesImgTwo,
    },
    {
      heading: "Dholki",
      description:
        "Get ready to groove and celebrate with our lively Dholki events, filled with music, laughter, and unforgettable moments.",
      image: servicesImgthree,
    },
    {
      heading: "Engagement",
      description:
        "Celebrate the beginning of a beautiful journey with our tailored engagement ceremonies, blending romance and excitement seamlessly.",
      image: servicesImgFour,
    },
    {
      heading: "Birthday",
      description:
        "Create cherished memories with our vibrant birthday celebrations, tailored to delight guests of all ages with fun-filled activities and delectable treats",
      image: servicesImgfive,
    },
    {
      heading: "School Functions",
      description:
        "Create cherished memories with our vibrant birthday celebrations, tailored to delight guests of all ages with fun-filled activities and delectable treats",
      image: servicesImgSix,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="max-md:h-auto h-auto bg-cover bg-no-repeat"
      // style={{ backgroundImage: `url(${cards[currentIndex].image.src})` }}
    >
      <div className="max-md:py-20 h-full mx-auto container flex  flex-col justify-center  items-center">
        <div
          //  className="w-auto py-10 px-5 bg-white/75 backdrop-blur-2xl shadow-xl  rounded-xl space-y-10 flex justify-between max-md:w-4/5"
          className="max-2xl:w-4/5  max-2xl:mt-10  mt-10 w-4/5 py-10 px-5 bg-white/75 opacity-75 backdrop-blur-2xl shadow-xl  rounded-xl space-y-10 max-sm:w-4/5 max-sm::mx-5  flex  flex-col justify-center items-center brightness-100"
        >
          {/* <div
           className="flex  flex-col items-center  justify-center gap-4"
          >
           
          </div> */}
          <h1 className="max-sm:text-4xl text-[#A2783A] max-xl:text-6xl max-2xl:text-8xl  text-6xl font-extrabold ">
            {cards[currentIndex].heading}
          </h1>
          <p className="max-sm:w-full text-center text-2xl">
            {cards[currentIndex].description}
          </p>
          <Image
            height={800}
            width={400}
            src={cards[currentIndex].image}
            alt={cards[currentIndex].title}
            className="rounded-xl"
          />
          {/* <div
          // className="mx-4"
          >
       
          </div> */}
        </div>
        <div className="flex gap-4 items-center my-5">
          <FaArrowAltCircleLeft
            className="text-white/75  w-10 h-10 cursor-pointer"
            onClick={handleLeftClick}
          />
          <FaArrowAltCircleRight
            className="text-white/75   w-10 h-10 cursor-pointer"
            onClick={handleRightClick}
          />
        </div>

        <div
          className="
       h-auto w-auto  flex   flex-wrap mx-20 mb-10"
        >
          {cards.map((ele, index) => (
            <button
              key={index} // Add a unique key for each button
              onClick={() => setCurrentIndex(index)} // Update currentIndex when button is clicked
              className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ${
                index === currentIndex ? "bg-opacity-100" : "bg-opacity-50"
              }`} // Apply different styles based on currentIndex
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {ele.heading}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
