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
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${cards[currentIndex].image.src})` }}
    >
      <div className="h-full mx-auto container flex  flex-col jus">
        <div
          //  className="w-auto py-10 px-5 bg-white/75 backdrop-blur-2xl shadow-xl  rounded-xl space-y-10 flex justify-between max-md:w-4/5"
          className="py-10 px-5 bg-white/75 backdrop-blur-2xl shadow-xl  rounded-xl space-y-10 max-sm:w-4/5 max-sm::mx-5  flex  flex-col justify-center items-center"
        >
          {/* <div
           className="flex  flex-col items-center  justify-center gap-4"
          >
           
          </div> */}
          <h1 className="max-sm:text-4xl text-yellow-300 ">
            {cards[currentIndex].heading}
          </h1>
          <p className="max-sm:w-full text-center">
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
        <div>Cards</div>
        {/* <div className="w-auto grid grid-cols-6 shadow-2xl ml-10">
          <div
            className="w-56 h-96  p-4 rounded-xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${cards[currentIndex].image.src})`,
            }}
          ></div>
          {cards.map((card, index) => (
            <>
              <div
                key={index}
                className={`w-56 h-96  p-4 rounded-xl bg-cover bg-no-repeat border-inherit border-l-white border-l-2 ${
                  card.image.src === cards[currentIndex].image.src && "hidden"
                }`}
                style={{
                  backgroundImage: `url(${
                    card.image.src === cards[currentIndex].image.src
                      ? ""
                      : card.image.src
                  })`,
                }}
              ></div>
            </>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ServiceSlider;
