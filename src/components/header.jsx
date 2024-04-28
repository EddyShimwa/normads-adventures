import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="mx-auto flex justify-between p-3 border-current" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <div className="flex items-center space-x-2">
        <img src="logo.png" alt="Logo" className="h-8 w-8" /> 
      </div>
      {showNav && (
        <nav className="flex justify-between w-3/5">
          <Link to="/" className="text-white hover:text-gray-200 px-3 rounded text-lg">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200  rounded text-lg">Our Tours</Link>
          <Link to="/contact" className="text-white hover:text-gray-200  rounded text-lg">Booking</Link>
          <Link to="/contact" className="text-white hover:text-gray-200  rounded text-lg">Blogs</Link>
          <Link to="/contact" className="text-white hover:text-gray-200  rounded text-lg ">FAQ</Link>
        </nav>
      )}
      <button className='text-black bg-white px-5 rounded-xl' onClick={() => setShowNav(!showNav)}>Menu</button>
    </header>
  );
};

export default Header;