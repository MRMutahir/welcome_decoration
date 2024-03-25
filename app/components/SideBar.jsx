import WellComeLogo from "../../public/image/img.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
const Noto = Noto_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "./fonts/BreeSerif-Regular.ttf" });
// bg-[#FFF7EA]

const SideBar = () => {
  return (
    <div
      className="sideBar max-md:hidden  "
      // style="background-image: url('https://files.123freevectors.com/wp-content/original/116355-abstract-dark-blue-lights-background-vector.jpg');"
    >
      <div className="fixed h-[100vh] w-[20%] flex justify-around flex-col items-center  container max-2xl:w-[20%">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tighter capitalize text-[#A2783A]"
            style={myFont.style}
          >
            welcome decorator
          </h1>
          <Image
            // src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/Logo%2FWELCOMElogo.svg?alt=media&token=043a1e4e-04a0-4a21-afe9-8186edcc399c"
            src={WellComeLogo}
            alt="welcome decoration"
            className="w-full h-full"
            // width={200}
            // height={200}
          />
        </div>
        <ul className="list-none text-center flex flex-col gap-5">
          <Link href={"/#Home"}>
            <li
              className={`text-[#A2783A] text-2xl font-normal font-serif cursor-pointer ${Noto.className}`}
            >
              Home
            </li>
          </Link>
          <Link href={"/#Why"}>
            {" "}
            <li
              className={`text-[#A2783A] text-2xl font-normal font-serif cursor-pointer ${Noto.className}`}
            >
              Why
            </li>
          </Link>
          <Link href={"/#About"}>
            <li
              className={`text-[#A2783A] text-2xl font-normal font-serif cursor-pointer ${Noto.className}`}
            >
              About
            </li>
          </Link>
          <Link href={"/#Contact"}>
            {" "}
            <li
              className={`text-[#A2783A] text-2xl font-normal font-serif cursor-pointer ${Noto.className}`}
            >
              Contact
            </li>
          </Link>
          <Link href={"/Services"}>
            <li
              className={`text-[#A2783A] text-2xl font-normal font-serif cursor-pointer ${Noto.className}`}
            >
              Services
            </li>
          </Link>
          <Link href={"/Gallery"}>
            <li
              className={`text-[#A2783A] text-2xl font-normal font-serif cursor-pointer ${Noto.className}`}
            >
              Gallery
            </li>
          </Link>
        </ul>
        <ul className="flex justify-between gap-4">
          <li>
            <FaFacebookF className="text-[#A2783A] w-14 h-9 max-2xl:w-10 max-lg:w-6" />
          </li>
          <li>
            <FaLinkedinIn className="text-[#A2783A] w-14 h-9 max-2xl:w-10 max-lg:w-6" />
          </li>
          <li>
            <FaInstagram className="text-[#A2783A] w-14 h-9 max-2xl:w-10 max-lg:w-6" />
          </li>
          <li>
            <BsWhatsapp className="text-[#A2783A] w-14 h-9 max-2xl:w-10 max-lg:w-6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
