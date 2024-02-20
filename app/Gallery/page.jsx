import React from "react";
import SideBar from "../components/SideBar";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

const page = () => {
  return (
    <div className="flex">
      <SideBar />
      <Gallery />
    </div>
  );
};

export default page;
