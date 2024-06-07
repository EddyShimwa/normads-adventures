import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/images/icon-menu.svg';
import close from '../assets/images/icon-close-menu.svg';
import BookingCard from './bookingCard';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-white">
        <img
          src={isOpen ? close : menu}
          alt="Menu Icon"
          className="h-6 cursor-pointer"
          onClick={toggleSidenav}
        />
      </div>
      <div
        className={`fixed inset-0 z-50 bg-white text-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <img
            src={close}
            alt="Close Icon"
            className="h-6 cursor-pointer"
            onClick={toggleSidenav}
          />
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/tours" className="hover:text-gray-400">Our Tours</Link>
          <Link to="/destinations" className="hover:text-gray-400">Our Top Destinations</Link>
          <button
            onClick={toggleModal}
            className="mt-4 whitespace-nowrap text-gray-200 bg-black px-5 py-2 rounded-xl"
          >
            Book now
          </button>
        </nav>
      </div>
      <BookingCard
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
      />
    </>
  );
};

export default SideNav;
