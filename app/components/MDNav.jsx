"use client";
import React, { useState } from "react";
import WellComeLogo from "../../public/image/img.svg";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";
const Noto = Noto_Sans({ subsets: ["latin"] });
const MDNav = () => {
  return (
    <nav className="bg-[#fff5f6] sticky top-0 z-[102] w-full  backdrop-blur-md shadow-xl drop-shadow-md ">
      {" "}
      <div className="container mx-auto flex  items-center  justify-between w-full">
        <div className="w-96">
          <Image
            src={WellComeLogo}
            alt="welcome decoration"
            width={150}
            height={150}
            // className="w-28 h-28"
          />
        </div>
        <div className="md:w-3/4">
          <ul className="flex justify-between max-md:hidden md:mx-10 md:gap-8 ">
            <Link href={"/#Home"}>
              <li
                className={`text-[#A2783A] font-normal font-serif cursor-pointer ${Noto.className}`}
              >
                Home
              </li>
            </Link>
            <Link href={"/#Why"}>
              {" "}
              <li
                className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
              >
                Why
              </li>
            </Link>
            <Link href={"/#About"}>
              <li
                className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
              >
                About
              </li>
            </Link>
            <Link href={"/#Contact"}>
              {" "}
              <li
                className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
              >
                Contact
              </li>
            </Link>
            <Link href={"/Services"}>
              <li
                className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
              >
                Services
              </li>
            </Link>
            <Link href={"/Gallery"}>
              <li
                className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
              >
                Gallery
              </li>
            </Link>
          </ul>
          <div className="flex-none dropdown dropdown-end">
            <button
              className="btn btn-square btn-ghost md:hidden"
              tabIndex={0}
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 py-10 px-5 shadow bg-base-100 rounded-box max-sm:w-72  space-y-5 mr-4 mt-8"
            >
              <Link href={"/#Home"}>
                <li
                  className={`text-[#A2783A] font-normal font-serif cursor-pointer ${Noto.className}`}
                >
                  Home
                </li>
              </Link>
              <Link href={"/#Why"}>
                {" "}
                <li
                  className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
                >
                  Why
                </li>
              </Link>
              <Link href={"/#About"}>
                <li
                  className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
                >
                  About
                </li>
              </Link>
              <Link href={"/#Contact"}>
                {" "}
                <li
                  className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
                >
                  Contact
                </li>
              </Link>
              <Link href={"/Services"}>
                <li
                  className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
                >
                  Services
                </li>
              </Link>
              <Link href={"/Gallery"}>
                <li
                  className={`text-[#A2783A]   font-normal font-serif cursor-pointer ${Noto.className}`}
                >
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MDNav;
