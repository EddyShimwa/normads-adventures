// components/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import BookingCard from './bookingCard';
import SideNav from './sideNav';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='w-full z-100 mx-auto flex justify-between h-[8vh] overflow-x-hidden bg-white'>
      <div className='flex justify-between items-center ml-4 w-full '>
        <img src={logo} alt='logo' className='md:h-[50px] h-[35px] md:ml-3' />
        <ul className='hidden md:flex font-epilogue text-[13px] items-center mx-12 text-gray-800'>
          <li className='mx-6 hover:text-gray-800 ml-5 cursor-pointer '>Home</li>
          <li className='mx-6 hover:text-gray-800 ml-5 cursor-pointer '>About Us</li>
          <li className='mx-6 hover:text-gray-800 cursor-pointer '>Our Tours</li>
          <li className='mx-6 hover:text-gray-800 cursor-pointer'>Our Top Destinations</li>
        </ul>
      </div>
      <div className='hidden md:flex transition-all duration-700 font-epilogue items-center text-gray-600'>
        <button onClick={() => setIsModalOpen(true)} className="whitespace-nowrap text-gray-200 bg-black px-5 rounded-xl h-[5vh]">Book now</button>
      </div>
      <SideNav />
      <BookingCard
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Header;
