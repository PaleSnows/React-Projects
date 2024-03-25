import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {

  return (
    <div className="border shadow-xl rounded-lg  ">
      <div className="">
        <img className="w-[100%] h-[207px]" src={image} alt="" />
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <p className="font-semibold text-lg">{name}</p>
          <img className="h-[18px] mt-1" src={assets.rating_starts} alt="" />
        </div>
        <p className="py-2 text-sm">{description}</p>
        <p className="font-semibold text-2xl text-red-500">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
