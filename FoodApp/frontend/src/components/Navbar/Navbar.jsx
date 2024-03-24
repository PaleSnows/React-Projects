import React, { useState } from "react";
import { assets } from "../../assets/assets";

function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center mx-[200px] mt-3 ">
      <img
        className="object-contain w-[125px]  h-[50px]"
        src={assets.logo}
        alt=""
      />
      <ul className="flex gap-4 text-slate-700 cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? " border-b-2 border-y-gray-600   " : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "border-b-2 border-y-gray-600" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app" ? "border-b-2 border-y-gray-600" : ""
          }
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={
            menu === "contact us" ? "border-b-2 border-y-gray-600" : ""
          }
        >
          Contact Us
        </li>
      </ul>
      <div className="flex gap-4 items-center ">
        <img src={assets.search_icon} alt="" />
        <div className=" relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute bg-orange-600 w-[9px] top-[-9px] right-[-1px] h-[9px] rounded-full">

          </div>
        </div>
        <button className="border border-red-300 rounded-full bg-transparent py-3 px-9 duration-400 hover:bg-red-200 ">
          Sign-In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
