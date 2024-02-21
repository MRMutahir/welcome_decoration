"use client";
import React from "react";
import Image from "next/image";
import { useMotionValue, useTransform, motion } from "framer-motion";

const ServicesCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
  let img = `https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg`;
  return (
    <motion.div
      style={{
        x,
        y,
        rotateX,
        rotateY,
        z: 100,
      }}
      drag
      dragElastic={0.18}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={img} alt="Shoes" width={600} height={200} />
        </figure>
        <div className="card-body opacity-0 bg-transparent hover:opacity-100">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
