import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="mx-[200px] mt-[70px] flex flex-col gap-4">
      <h1 className="font-semibold text-3xl">Explore our menu</h1>
      <p className="">
        Browse through a diverse range of cuisines, from traditional favorites
        to innovative fusion creations, all conveniently sorted into categories
        like Popular Picks, Chef's Specials, and Healthy Options. With just a
        few taps, explore new flavors, discover hidden gems, and embark on a
        culinary adventure right from the comfort of your home.
      </p>
      <div className="flex gap-7 mt-2 pr-3 overflow-scroll h-[210px] ">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <img src={item.menu_image} alt="" />
              <p className="text-center text-lg text-gray-700 ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="bg-gray-200 h-[2px] mb-5"/>
    </div>
  );
};

export default ExploreMenu;
