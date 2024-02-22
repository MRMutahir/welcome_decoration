import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import weedingImg from "../../public/image/imgThree.jpg";

const ServicesCard = (props) => {
  let servicesItem = [props];

  // servicesItem.forEach((ele) => {
  //   console.log(ele, ">>>>>>>>>>>>>>>>>ele");
  // });
  // console.log(servicesItem, "servicesItem>>>>>>>>>>>>>");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
  let img = `https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg`;

  const handleHover = () => {
    console.log("Hovered or focused!");
  };

  return (
    <>
      {servicesItem.map((ele, index) => (
        <motion.div
          key={index}
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
          }}
          drag
          dragElastic={0.18}
          onHoverStart={handleHover}
          onFocus={handleHover}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{
            cursor: "grabbing",
          }}
        >
          <div className="card w-96 bg-base-100 shadow-xl h-full">
            <figure>
              {/* Replace the placeholder image with your actual image */}
              <Image src={ele.img} alt="Shoes" width={600} height={200} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ele.title}</h2>
              <p>{ele.para}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ServicesCard;
