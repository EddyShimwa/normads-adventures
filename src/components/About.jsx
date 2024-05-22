import React, { useEffect, useRef, useState } from "react";
import useScrollReveal from "../utils/useScrollReveal";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const About = () => {
  const mapContainer = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredDestinations, setFilteredDestinations] = useState([]);
  useScrollReveal(".about");

  // Dummy top destinations data with thumbnails
  const topDestinations = [
    { name: "Akagera National Park", coordinates: [51.5, -0.1], thumbnail: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg" },
    { name: "Nyungwe Forest", coordinates: [51.51, -0.11], thumbnail: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg" },
    { name: "Twin lakes", coordinates: [51.49, -0.12], thumbnail: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg" }
  ];

  useEffect(() => {
    const filtered = topDestinations.filter(destination =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, [searchTerm]);

  useEffect(() => {
    const map = L.map(mapContainer.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    filteredDestinations.forEach(destination => {
      const marker = L.marker(destination.coordinates)
        .addTo(map)
        .bindPopup(`<div><h3>${destination.name}</h3><img src="${destination.thumbnail}" alt="${destination.name}" width="150" height="100"/></div>`);
    });

    if (filteredDestinations.length > 0) {
      const firstDestination = filteredDestinations[0];
      map.setView(firstDestination.coordinates, 13);
    }

    return () => {
      map.remove();
    };
  }, [filteredDestinations]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="about flex justify-center h-[60vh] bg-white text-black p-8 rounded-lg w-full text-center relative">
      <div className="w-1/2 relative">
        <h2 className="text-xl font-bold mb-4">Our Top Destinations</h2>
        <div ref={mapContainer} style={{ height: "70%", width: "80%" }} />
        <input
          type="text"
          placeholder="Search destinations.."
          value={searchTerm}
          onChange={handleSearchChange}
          className="absolute top-0 left-0 bg-white border border-gray-300 rounded-md p-2 mb-8"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <p className="text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum id turpis commodo convallis. Donec quis nunc non nisi efficitur viverra. Nullam eu nisi vitae lacus bibendum bibendum nec non lorem. Sed sollicitudin justo sit amet mauris fermentum vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eu nisi vitae lacus bibendum bibendum nec non lorem. Sed sollicitudin justo sit amet mauris fermentum vehicula.
        </p>
      </div>
    </div>
  );
};

export default About;
