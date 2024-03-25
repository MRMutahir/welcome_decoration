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
      <div className="container h-auto mx-auto flex  flex-col  items-center justify-center">
        <div className="h-full flex flex-col justify-center items-center py-20">
          <h1
            className="mb-4 text-4xl tracking-tight font-extrabold text-center 0 dark:text-white text-[#A2783A]"
            style={myFont.style}
          >
            Our Gallery
          </h1>
          <div className="my-10">
            <div className="flex flex-wrap justify-center mx-4">
              {ServicesName.map((ele, index) => (
                <button
                  key={index}
                  className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-offset-amber-50 dark:ring-offset-amber-50`}
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {ele}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {imagesObj.map((ele, index) => (
              <div key={index} className="m-2">
                <Image
                  src={ele.img.src}
                  alt={ele.alt}
                  width={200}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
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
