import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import { IoMdClose } from "react-icons/io";// Import close icon
import useScrollReveal from '../utils/useScrollReveal';

ReactModal.setAppElement('#root');

const BookingCard = ({isOpen, onRequestClose}) => {
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

useEffect(() => {
  function handleResize() {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 99 
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'none',
    height: windowDimensions.width <= 768 ? '80vh' : '80vh', 
    width: windowDimensions.width <= 768 ? '80%' : '50%', 
  },
};


  return (
    <ReactModal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      contentLabel="Booking Modal"
      style={{
        overlay: modalStyles.overlay,
        content: modalStyles.content}}
    >
      <button onClick={onRequestClose} className="bg-black text-white font-bold px-6 py-4 rounded absolute top-0 right-0 mr-12 m-4">
      <IoMdClose size={20}/>
      </button> 
      <div className="flex bg-white shadow-sm rounded-lg overflow-hidden items-center md:w-full">
        <div className="w-full p-8">
          <h2 className="font-bold text-2xl mb-6">Book a Tour</h2>
          <form>
            <input className="border-2 rounded w-full py-4 px-5 mb-3" type="text" placeholder="Full Name" />
            <input className="border-2 rounded w-full py-4 px-5 mb-3" type="email" placeholder="Email" />
            <input className="border-2 rounded w-full py-4 px-5 mb-3" type="number" placeholder="Number of People" />
            <input className="border-2 rounded w-full py-4 px-5 mb-3" type="text" placeholder="Country" />
            <select className="border-2 rounded w-full py-4 px-5 mb-6">
              <option>Select a Tour</option>
              <option>Hiking</option>
              <option>City Tour</option>
              <option>Historical Sites</option>
              <option>Mountain Climbing</option>
              <option>Canopy Walk</option>
              <option>All</option>
            </select>
            <button className="bg-black hover:bg-black text-white font-bold py-4 px-8 rounded mx-auto block">
               Book
            </button>
          </form>
        </div>
      </div>
    </ReactModal>
  );
};

export default BookingCard;