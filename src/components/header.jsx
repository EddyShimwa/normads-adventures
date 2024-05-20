import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/NomadsLogo.png"
import BookingCard from "./bookingCard";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header
      style={{ height: "8%", position: "absolute", top: "0", left: "0", right: "0", zIndex: "999" }}
      className="mx-auto flex justify-between p-3 border-current bg-white opacity-80 items-center w-full er:bg-gray-80"
    >
      <img src={Logo} alt="Logo" id="nomadsLogo" className="w-1/2 px-6"/>
      <nav className="flex justify-between w-3/5 font-bold">
        <div className="group inline-block relative">
          <Link
            to="/"
            className="text-black  hover:text-gray-200  rounded text-lg"
          >
            Blogs
          </Link>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            <Link to="/tour1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 1</Link>
            <Link to="/tour2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 2</Link>
            <Link to="/tour3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 3</Link>
          </div>
        </div>
        <div className="group inline-block relative">
          <Link
            to="/"
            className="text-black  hover:text-gray-200  rounded text-lg"
          >
            About
          </Link>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 1</Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 2</Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 3</Link>
          </div>
        </div>
        <div className="group inline-block relative">
          <Link
            to="/"
            className="text-black  hover:text-gray-200  rounded text-lg"
          >
            FAQ
          </Link>
        </div>
        <div className="group inline-block relative">
          <Link
            to="/about"
            className="text-black  hover:text-gray-200  rounded text-lg"
          >
            Our Tours
          </Link>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            <Link to="/tour1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 1</Link>
            <Link to="/tour2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 2</Link>
            <Link to="/tour3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tour 3</Link>
          </div>
        </div>
      </nav>
      <button onClick={openModal} className="text-gray-200 bg-black px-5 rounded-xl h-[5vh]">
        Book Now
      </button>
      <BookingCard isOpen={modalOpen} onRequestClose={closeModal} /> 
    </header>
  );
};  

export default Header;