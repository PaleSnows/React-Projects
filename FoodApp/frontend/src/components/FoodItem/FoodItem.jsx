import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="border shadow-xl rounded-lg  ">
      <div className="relative ">
        <img className="w-[100%] h-[207px]" src={image} alt="" />
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <p className="font-semibold text-lg">{name}</p>
          <img className="h-[18px]" src={assets.rating_starts} alt="" />
          {!cartItems[id] ? (
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              className="object-contain absolute  ml-[225px] mt-[84px] cursor-pointer w-[35px]  h-[45px] "
            />
          ) : (
            <div className="border rounded-xl pb-3 pt-2 px-4 bg-green-400 m-2 cursor-pointer absolute flex gap-3 ml-[134px] mt-[76px]   h-[50px]">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
                className="w-[30px] h-[35px] object-contain"
              />
              <p className="mt-1 ">{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
                className="w-[30px] h-[35px] object-contain"
              />
            </div>
          )}
        </div>
        <p className="py-2 text-sm w-[250px]">{description}</p>
        <p className="font-semibold text-2xl text-red-500">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
