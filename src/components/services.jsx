import React from "react";
import { FaCar, FaHorse, FaPeopleGroup} from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import ServiceCard from "./serviceCard";

const services = [
  { title: "Airport Pickup", description: "We provide airport pickup...", icon: <FaCar size={32} /> },
  { title: "Easy Booking", description: "Enjoy a horse ride...", icon: <TbBrandBooking size={32} /> },
  { title: "Best Tour Guide", description: "Bike rental services available...", icon: <FaPeopleGroup size={32} /> },
  { title: "Lots of Promos", description: "Bike rental services available...", icon: <MdOutlineDiscount size={32} /> },
];

const Services= () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#ffffff] ">
      <div className="text-center px-4 ">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700">Top Values for you</h1>
        <h3 className="text-sm  md:text-lg">Try variety of benefits when using our services</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-none md:flex md:flex-row md:space-x-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;