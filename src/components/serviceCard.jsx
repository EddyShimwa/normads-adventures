import React, { useEffect } from 'react';
import useScrollReveal from '../utils/useScrollReveal';

const ServiceCard = ({ service }) => {

useScrollReveal('.service-card');
  return (
    <div className="service-card max-w-sm rounded overflow-hidden shadow-lg m-3 flex flex-col items-center justify-center">
      <div className="px-8 py-8 text-center">
        <div className="flex items-center justify-center border-lg ">
          {service.icon}
        </div>
        <div className="font-bold text-sm md:text-xl mb-2 text-gray-700 ">{service.title}</div>
        <p className="text-gray-700 text-xs md:text-sm">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;