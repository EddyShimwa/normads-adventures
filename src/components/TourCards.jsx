import React, { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import useScrollReveal from "../utils/useScrollReveal";
import tours from "../tours.json";

const TourCards = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useScrollReveal(".tour-card");

  useEffect(() => {
    const loadImage = (imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const preloadImages = async () => {
      try {
        const promises = tours.map((tour) => loadImage(tour.image));
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  return (

    <div className="bg-cover bg-[#466174] h-screen border-4" style={{ backgroundImage: `url(${bg})`, zIndex: -1 }}>
      <h1 className="text-center text-4xl text-gray-200 font-bold text-black w-full p-5 mt-16">MOST POPULAR TOURS</h1>

      {imagesLoaded && (
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center ">
            {tours.map((tour, index) => (
              <div key={index} className="tour-card max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
                <img src={tour.image} alt={tour.name} className="w-full" /> {/* Use the images object to get the correct image */}
                <div className="absolute bg-black bg-opacity-60 text-white px-2 py-5 -mt-20 right-2">{tour.name}</div>
                <div className="px-6 py-4">
                  <ul>
                    <li className="border-b-2 py-1">{tour.duration}</li>
                    <li className="border-b-2 py-1">{tour.groupSize}</li>
                    <li className="border-b-2 py-1">{tour.accommodation}</li>
                    <li className="border-b-2 py-1">{tour.guides}</li>
                    <li className="py-1">Difficulty: {tour.difficulty}</li>
                  </ul>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tour</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#adventure</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  );
};

export default TourCards;