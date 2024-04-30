import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ height: "8%", position: "absolute", top: "0", left: "0", right: "0", zIndex: "999" }}
      className="mx-auto flex justify-between p-3 border-current bg-white opacity-30"
    >
      <div className="flex items-center space-x-2 font-bold">
        <img src="logo.png" alt="Logo" className="h-2 w-8" />
      </div>
      <nav className="flex justify-between w-3/5">
        <Link
          to="/"
          className="text-black er:text-gray-200 px-3 rounded text-lg"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black  hover:text-gray-200  rounded text-lg"
        >
          Our Tours
        </Link>
        <Link
          to="/contact"
          className="text-black  hover:text-gray-200  rounded text-lg"
        >
          Booking
        </Link>
        <Link
          to="/contact"
          className="text-black  hover:text-gray-200  rounded text-lg"
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          className="text-black hover:text-gray-200  rounded text-lg "
        >
          FAQ
        </Link>
      </nav>
      <button className="text-black bg-white px-5 rounded-xl h-[5vh]">
        Menu
      </button>
    </header>
  );
};

export default Header;
