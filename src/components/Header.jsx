import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { ProductItems } from "../utils/mockdata";
const Header = () => {
  // const [btnName, setBtnName] = useState("Login");
  const [btnName, setBtnName] = useState(false);
  return (
    <header className="flex items-center justify-between px-3 text-2xl">
      <div>
        <img src={LOGO_URL} alt="Store Logo" className="w-20 h-20" />
      </div>
      <div className="flex justify-between list-none w-96">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <div>
          <button
            className="absolute top-4 px-4 py-2 border-4 border-blue-500 hover:shadow-blue-600 rounded-full hover:bg-blue-400 "
            onClick={() => {
              setBtnName(!btnName);
            }}
          >
            {btnName ? "Logout" : "Login"}
          </button>
        </div>
      </div>
      <a href=""> Cart </a>
    </header>
  );
};
export default Header;
