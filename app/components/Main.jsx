"use  client";
import React from "react";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Image from "next/image";
import DaisyNavbar from "./DaisyNavbar";
import MDNav from "./MDNav";

const Main = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <MDNav />
      <RightBar />
    </>
  );
};

export default Main;
