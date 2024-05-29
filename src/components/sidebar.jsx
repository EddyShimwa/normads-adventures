import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Importing close icon

const Sidebar = ({ isOpen, toggleSidebar, toggleModal }) => {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <FaTimes onClick={toggleSidebar} className="md:hidden block m-4"/> 
      <nav className="flex flex-col h-screen justify-between font-bold p-4"> 
        <div className="group inline-block relative">
          <Link
            to="/"
            className="text-black  hover:text-gray-200  rounded text-lg"
          >
            Blogs
          </Link>
          {/* Rest of your code */}
        </div>
        <div className="group inline-block relative">
          <Link
            to="/"
            className="text-black  hover:text-gray-200  rounded text-lg"
          >
            About
          </Link>
          {/* Rest of your code */}
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
          {/* Rest of your code */}
          <button onClick={toggleModal}>Book a tour</button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;