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
    <div className="flex justify-center items-center h-[50vh] bg-[#ffffff]">
    <div className="text-center ">
      <h1 className="text-6xl font-bold text-gray-700 " >Top Values for you</h1>
      <h3 className="text-xl">Try variety of benefits when using our services</h3>
      <div className="flex flex-col items-center justify-center m-auto ">
        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;