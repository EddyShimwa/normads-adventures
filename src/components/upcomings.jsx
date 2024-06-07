import React, { useEffect } from "react";
import useScrollReveal from "../utils/useScrollReveal";

const UpcomingTour = () => {
  const startDate = new Date(2024, 6, 24);
  const endDate = new Date(2024, 7, 25);

  useScrollReveal(".upcoming-tour");

  return (
    <div
      className="upcoming-tour top-[15%] absolute right-2 m-4 rounded-3xl bg-black bg-opacity-20 md:h-[50vh] h-[48vh] md:w-1/4 w-1/2 z-2"
    >
      <h4 className=" flex text-gray-100 md:text-lg text-sm font-bold p-4">
        Upcoming Tour
      </h4>
      <h1 className="flex items-start text-gray-200 md:text-xl text-xs font-bold p-4 -mt-6">
        {startDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        -{" "}
        {endDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h1>
      <h1 className="flex items-start text-white md:text-4xl text-lg font-bold p-4 md:mb-2">
        Lakes of Ruhondo
      </h1>

      <div className="flex justify-between items-center">
        <h3 className="text-gray-100 flex text-left md:p-6 p-4 md:text-sm text-justify text-2xs">
          Lorem ipsum dolor sit amet consectetur elit. Consectetur pariatur
          dignissimos mollitia deserunt laudantium, aliquid nulla doloribus
          nihil impedit eos ignissimos mollitia deserunt laudantium, aliquid nulla doloribus
          nihil impedit eos..
        </h3>
        
      </div>
      <div className="flex  w-full ">
        <button className="bg-white hover:bg-gray-200 hover:text-black items-center text-black font-bold py-2 text-xs px-6 m-auto rounded md:w-4/5 w-1/2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default UpcomingTour;
