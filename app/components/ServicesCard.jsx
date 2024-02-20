import Image from "next/image";

const ServicesCard = () => {
  let img = `https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg`;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={img} alt="Shoes" width={600} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
