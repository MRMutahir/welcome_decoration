import WellComeLogo from "../../public/image/img.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="sideBar max-md:hidden">
      <div className="fixed h-[100vh] w-[20%] flex justify-around flex-col items-center  bg-[#FFF7EA] container max-2xl:w-[20%] max-2xl:bg-black ">
        <div className="flex flex-col  items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter">
              welcome decoration
            </h1>
          </div>
          <div className="">
            {" "}
            <Image
              // src="https://firebasestorage.googleapis.com/v0/b/video-sharing-app-f1f97.appspot.com/o/Logo%2FWELCOMElogo.svg?alt=media&token=043a1e4e-04a0-4a21-afe9-8186edcc399c"
              src={WellComeLogo}
              width={200}
              height={200}
              alt="welcome decoration"
            />
          </div>
        </div>
        <div>
          <ul className="list-none text-center flex flex-col gap-5">
            <li className="text-[#A2783A] text-2xl font-normal font-serif">
              Home
            </li>
            <li className="text-[#A2783A] text-2xl font-normal font-serif">
              Why
            </li>
            <li className="text-[#A2783A] text-2xl font-normal font-serif">
              About
            </li>
            <li className="text-[#A2783A] text-2xl font-normal font-serif">
              Cotact
            </li>
            <li className="text-[#A2783A] text-2xl font-normal font-serif">
              Services
            </li>{" "}
            <li className="text-[#A2783A] text-2xl font-normal font-serif">
              Gallery
            </li>
          </ul>
        </div>
        <div>
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
    </div>
  );
};

export default SideBar;
