"use client";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import DaisyNavbar from "./DaisyNavbar";
const Main = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    // <div className="flex">

    // </div>
    <>
      {/* <SideBar /> */}
      <DaisyNavbar />
      <RightBar />
    </>
  );
};

export default Main;
