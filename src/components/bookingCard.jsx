import React from 'react';
import bgImage from '../assets/bg3.jpg';

const BookingCard = () => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden h-screen items-center p-24 ">
      <div className="w-1/2 p-8">
        <h2 className="font-bold text-2xl mb-6">Book a Tour</h2>
        <form>
          <input className="border rounded w-full py-2 px-3 mb-3" type="text" placeholder="Full Name" />
          <input className="border rounded w-full py-2 px-3 mb-3" type="email" placeholder="Email" />
          <input className="border rounded w-full py-2 px-3 mb-3" type="number" placeholder="Number of People" />
          <input className="border rounded w-full py-2 px-3 mb-3" type="text" placeholder="Address" />
          <select className="border rounded w-full py-2 px-3 mb-6">
            <option>Select a Tour</option>
            <option>Hiking</option>
            <option>City Tour</option>
            <option>Historical Sites</option>
            <option>Mountain Climbing</option>
            <option>Canopy Walk</option>
            <option>All</option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next Step
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <img src={bgImage} alt="Tour" />
      </div>
    </div>
  );
};

export default BookingCard;