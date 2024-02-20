import Image from "next/image";
import ImageOne from "../../public/image/HM1.jpg";
import ImageTwo from "../../public/image/HM5.jpg";
import ImageThree from "../../public/birthday.webp";
import mhendi from "../../public/mhendi.jpg";
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
  return (
    <div className="rightBar overflow-auto w-screen h-screen">
      <div className="container">
        <div className="flex items-center justify-center flex-col my-20">
          <h1 className="text-7xl font-semibold font-mono">Our Gallery</h1>
          <div className="my-10">
            {ServicesName.map((ele) => (
              <button
                key={ele}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-6"
              >
                {ele}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap mx-auto overflow-hidden gap-1">
          <Image
            src={ImageOne}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Barat"
          />
          <Image
            src={ImageTwo}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Valima"
          />
          <Image
            src={ImageThree}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Birthday"
          />
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />{" "}
          <Image
            src={mhendi}
            width={500}
            height={500}
            className="hover:scale-125 transition-transform duration-300"
            alt="Mehendi"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
