import React, {useState} from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/NomadsLogo.png"
import BookingCard from "./bookingCard";
import logo from '../assets/images/logo.png'
import downArrow from '../assets/images/icon-arrow-down.svg'
import upArrow from '../assets/images/icon-arrow-up.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close-menu.svg'

const DropDown = ({ name, items }) => {
  const [swi, setSwi] = useState(false)
  const toggle = () => { 
      if (swi) {
          setSwi(false)
      } else {
          setSwi(true)
      }
  }
  return (
      <div>
          <li className={swi ? 'flex items-center mx-6 text-gray-800 cursor-pointer' : 'flex items-center mx-6 hover:text-gray-800 cursor-pointer'} onClick={toggle}>{name}<img src={swi ? upArrow : downArrow} alt='arrow' className='h-[8px] mx-2' /></li>
          <div className={swi ? 'absolute top-20 w-[160px] h-[160px] shadow-2xl rounded-xl flex flex-col justify-center bg-white transition-all duration-700' : 'hidden'}>
              <ul className='flex flex-col text-gray-600 font-epilogue text-[15px]'>
                  {items.map((item, index) => (
                      <li key={index} className='flex  items-start my-1.5 mx-auto'><img src={item.image} alt='icon' className='h-[20px] w-5 mr-2' />{item.name}</li>

                  ))}
              </ul>
          </div>

      </div>


  )
}

const Header= ({openModal}) => {

  const [Comnav, SetComNav] = useState(false);
  const [Sidenav, SetSideNav] = useState(false);
  const [sideFae, SetSideFae] = useState(false);
  const [sideCom, SetSideCom] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleSidenav = () => {
      SetSideNav(!Sidenav);
  }

  const toggleSideFae = () => {
      SetSideFae(!sideFae);
  }

  const toggleSideCom = () => {
      SetSideCom(!sideCom);
  }


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
          <button onClick={() => setIsModalOpen(true)} className="whitespace-nowrap text-gray-200 bg-black px-5 rounded-xl h-[5vh]">Book Now</button>
             
          </div>
          <div className='flex items-center mr-8'>
              <img src={menu} alt='menuIcon'className={Sidenav ? 'hidden' : 'flex h-[22px] cursor-pointer md:hidden'} onClick={toggleSidenav} />
          </div>
          <div className={Comnav ? 'absolute top-20 ml-[370px] w-[120px] h-[100px] shadow-2xl rounded-xl flex flex-col justify-center bg-white' : 'hidden'}>
              <ul className='flex flex-col text-gray-600 font-epilogue text-[15px] items-center'>
                  <li className='my-1'>History</li>
                  <li className='my-1'>Our Team</li>
                  <li className='my-1'>Blog</li>
              </ul>
          </div>
          <div className={`absolute flex justify-end overflow-hidden w-[100%] ${Sidenav ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div className={`h-screen right-0 w-[60%] flex flex-col bg-white justify-center transform transition-transform ease-in-out duration-300 ${Sidenav ? 'translate-x-0' : 'translate-x-full'}`}>
                  <div className='flex justify-end mt-[29px] mr-[32px]'>
                      <img src={close} alt='closeIcon' className='h-[25px] cursor-pointer' onClick={toggleSidenav} />
                  </div>
                  <ul className='text-gray-600 font-epilogue text-[18px] flex flex-col ml-[25px] mt-6'>
                      <li className='flex items-center cursor-pointer my-3' onClick={toggleSideFae}>Features<img src={sideFae ? upArrow : downArrow} alt='arrow' className='h-[8px] ml-[18px]' /></li>

                      <li className='flex items-center cursor-pointer my-3' onClick={toggleSideCom}>Company<img src={sideCom ? upArrow : downArrow} alt='arrow' className='h-[8px] ml-[15px]' /></li>
                      <div className={`${sideCom ? 'h-full' : 'h-[0px]'} overflow-hidden transition-all duration-300 flex flex-col ml-[35px]`}>
                          <ul className='my-[15px]'>
                              <li className='my-2.5'>History</li>
                              <li className='my-2.5'>Our Team</li>
                              <li className='my-2.5'>Blog</li>
                          </ul>
                      </div>
                      <li className='my-3'>Careers</li>
                      <li className='my-3'>About</li>
                  </ul>
                  <div className='text-gray-600 font-epilogue flex flex-col justify-center items-center'>
                  <button onClick={() => setIsModalOpen(true)} className="whitespace-nowrap text-gray-200 bg-black px-5 rounded-xl h-[5vh]">Book Now</button>
                  </div>

              </div>
          </div>
          <BookingCard
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
      </div>
  )
}

export default Header