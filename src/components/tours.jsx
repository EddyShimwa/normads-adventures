import React from "react";
import bg from "../assets/bg.jpg";
import ImageGroup from "./ImageGroup";

const Tours = () => {
  return (
    <div className="flex flex-col items-center h-screen relative border-4">
      <div className="bg-cover absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url(${bg})`, zIndex: -1 }}>
        <div className="absolute inset-0 bg-[#466174] opacity-60"></div>
      </div>
      <h1 className="text-4xl font-bold mt-5 text-gray-100">EXCITING TOURS FOR ADVENTUROUS PEOPLE</h1>
      <div className="flex justify-between w-full">
        <div className="w-1/3 py-8 px-4">
          <h3 className="text-2xl font-bold mb-2 text-gray-100">YOU ARE GOING TO FALL IN LOVE WITH NATURE </h3>
          <p className="text-gray-100 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, enim ducimus. Asperiores accusamus, assumenda dolorum blanditiis sequi itaque maiores iusto ex eius corrupti, exercitationem, error doloribus! Ex placeat quasi vero quisquam in possimus voluptatibus sequi velit accusamus sit, eius assumenda,</p>
          <h2 className="text-2xl font-bold mb-2 text-gray-100">LIVE ADVENTURES LIKE NEVER HAD BEFORE </h2>
          <p className="text-gray-100 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, enim ducimus. Asperiores accusamus, assumenda dolorum blanditiis sequi itaque maiores iusto ex eius corrupti, exercitationem, error doloribus! Ex placeat quasi vero quisquam in possimus voluptatibus sequi velit accusamus sit, eius assumenda,</p>
          <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mt-2">
            Learn More
          </button>
        </div>
        <ImageGroup />
      </div>
    </div>
  );
};

export default Tours;