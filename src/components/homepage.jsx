import React from "react";
import bg from "../assets/bg.jpg";
import UpcomingTour from "./upcomings";
import Header from "./header";

const HomePage = () => {
  return (
    <div
      className="w-full mx-auto relative bg-cover h-[100vh] items-center border-4 border-gray-200"
      style={{ backgroundImage: `url(${bg})` }} // Set background image using inline style
    >
        <Header/>
              <div className="absolute top-0 left-0">
        <h1 className="text-7xl w-1/2 font-bold text-gray-100 p-5 mt-16">
          NOMADS
        </h1>
        <h1 className="text-7xl w-1/2 font-bold text-gray-100 opacity-50 p-5 -mt-8">
  ADVENTURES
</h1>
        <p className="pl-7 w-3/4 text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quibusdam </p>
      </div>
      <UpcomingTour/>
      <div className="absolute bottom-0 left-0 text-white p-5 space-y-2">
        <h2 className="text-2xl font-bold">Our Tour Services</h2>
        <ul className="flex list-disc justify-between m-4">
          <li className="mr-8">Tour Service 1</li>
          <li className="mr-8">Tour Service 2</li>
          <li className="mr-8">Tour Service 3</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
