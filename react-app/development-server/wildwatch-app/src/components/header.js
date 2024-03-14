import React from "react";

import Social from "./social";
import logo from "../images/logo.png";

import Navmobile from "./Navmobile";

const Header = () => {
  return (
    <header
      className={`head container mx-auto px-4 lg:px-0 w-full text-black z-10 transition-all duration-300 `}
    >
      <nav className="flex justify-between py-7">
        <div className="flex justify-between">
          <img
            src={logo}
            alt=""
            className="lg:w-[200px] lg:h-[200px] lg:my-[-40px] my-[-25px] w-[150px] h-[150px] lg:ml-[5%]"
          />
          <h1 className="text-4xl hidden lg:block text-gray-800 py-12 px-[-6px] font-extrabold lg:w-[300px] lg:my-[-25px] text-center ">
            Wild Watch
          </h1>
        </div>
        <div className="gap-4 hidden lg:flex mr-[8px] lg:mt-[-50px] ">
          <Social className="" />
        </div>
        <div className="lg:hidden">
          <Navmobile className="z-10" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
