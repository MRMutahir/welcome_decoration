import Image from "next/image";
import one from "../../public/image/HM1.jpg";
import two from "../../public/image/HM5.jpg";
import three from "../../public/birthday.webp";
import four from "../../public/mhendi.jpg";
import five from "../../public/mhendi.jpg";
import six from "../../public/image/bgFour.jpg";
import seven from "../../public/image/bgOne.jpg";
import eight from "../../public/image/bgThree.jpg";
import nine from "../../public/image/bgFour.jpg";
import ten from "../../public/image/servicesImgTwo.jpg";
import eleven from "../../public/image/servicesImgthree.jpg";
import twelve from "../../public/image/servicesImgOne.jpg";
import thirteen from "../../public/image/servicesImgFour.jpg";
import fourteen from "../../public/image/servicesImgfive.jpg";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
const Noto = Noto_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
const Gallery = () => {
  let ServicesName = [
    "Barat",
    "Valima",
    "Rasme hina",
    "Dholki",
    "Engagement",
    "Birthday",
    "Ceremonies",
  ];

  let imagesObj = [
    {
      img: one,
      alt: "one",
    },
    {
      img: two,
      alt: "two",
    },
    {
      img: three,
      alt: "three",
    },
    {
      img: four,
      alt: "four",
    },
    {
      img: five,
      alt: "one",
    },
    {
      img: six,
      alt: "six",
    },
    {
      img: seven,
      alt: "seven",
    },
    {
      img: eight,
      alt: "eight",
    },
    {
      img: nine,
      alt: "nine",
    },
    {
      img: ten,
      alt: "ten",
    },
    {
      img: eleven,
      alt: "eleven",
    },
    {
      img: twelve,
      alt: "twelve",
    },
    {
      img: thirteen,
      alt: "thirteen",
    },
    {
      img: fourteen,
      alt: "forteen",
    },
    {
      img: one,
      alt: "one",
    },
  ];
  return (
    <>
      {" "}
      <h1
        className="mb-4 text-4xl tracking-tight font-extrabold text-center 0 dark:text-white text-[#A2783A]"
        style={myFont.style}
      >
        Our Gallery
      </h1>
      <div className="my-10 grid grid-cols-4 gap-6">
        {ServicesName.map((ele) => (
          <button
            key={ele}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            style={myFont.style}
          >
            {ele}
          </button>
        ))}
      </div>
    </>
    // <div className="rightBar overflow-auto w-screen h-screen">
    //   <div className="container ">
    //     <div className="flex items-center justify-center flex-col my-20"></div>

    //     <div className="grid grid-cols-4 mx-auto gap-1 ">
    //       {imagesObj.map((ele, index, number) => (
    //         <>
    //           <div key={index}>
    //             {" "}
    //             <Image
    //               src={ele.img}
    //               className="hover:scale-125 transition-transform duration-300 w-96 h-56 object-cover"
    //               alt={ele.alt}
    //             />
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Gallery;
