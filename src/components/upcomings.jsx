import React, { useEffect } from 'react';
import useScrollReveal from '../utils/useScrollReveal';

const UpcomingTour = () => {

  useScrollReveal(".upcoming-tour");


  return (
    <div className="upcoming-tour absolute right-2 m-4 rounded-3xl bg-black bg-opacity-20 h-[50vh] w-1/4" style={{backdropFilter: 'blur(5px)'}}>
      <h4 className=" flex text-gray-100 text-lg font-bold pt-4 pl-4">
        Upcoming Tour
      </h4>
      <h1 className="text-white text-6xl font-bold pt-2 mb-10">
        Lakes of ICELAND
      </h1>
      <div className="flex px-8 justify-between text-white">
        <p className="text-white w-1/3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          eligendi!
        </p>
        <p className="text-gray-400 flex  w-2/3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          pariatur dignissimos mollitia deserunt laudantium, aliquid nulla
          doloribus nihil impedit eos{" "}
        </p>
      </div>
      <div className="flex absolute bottom-3 w-full ">
        <button className="bg-white hover:bg-gray-200 hover:text-black items-center text-black font-bold py-2 px-4 mx-auto rounded w-4/5 ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default UpcomingTour;