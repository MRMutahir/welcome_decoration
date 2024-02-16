import React from "react";
import Image from "next/image";
import WellComeLogo from "../../public/image/img.svg";

const Why = () => {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="flex  justify-center items-center ">
        <h1 className="text-8xl">Why</h1>
        <div className="">
          <Image
            src={WellComeLogo}
            width={200}
            height={200}
            alt="welcome decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
