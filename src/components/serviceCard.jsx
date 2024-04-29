import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ServiceCard = ({ service }) => {
  useEffect(() => {
    ScrollReveal().reveal('.service-card', { 
      delay: 100, 
      reset: true,
      distance: '30px',
      origin: 'bottom',
      duration: 1000
    });
  }, []);

  return (
    <div className="service-card max-w-sm rounded overflow-hidden shadow-lg m-3 flex flex-col items-center justify-center">
      <div className="px-8 py-8 text-center">
        <div className="flex items-center justify-center border-lg">
          {service.icon}
        </div>
        <div className="font-bold text-xl mb-2 text-gray-700 ">{service.title}</div>
        <p className="text-gray-700 text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;