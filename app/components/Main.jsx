"use client";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
const Main = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="flex">
      <SideBar />
      <RightBar />
    </div>
  );
};

export default Main;
