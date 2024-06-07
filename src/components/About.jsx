import React, { useEffect, useRef, useState } from "react";
import useScrollReveal from "../utils/useScrollReveal";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import rwData from "../rw.json";
import customMarker from '../assets/images/giphy.gif'
import { Icon } from "leaflet";


const defaultMarker = new Icon({
  iconUrl: customMarker,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
});

const About = () => {
  const mapContainer = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredDestinations, setFilteredDestinations] = useState([]);
  useScrollReveal(".about");

  const topDestinations = [
    {
      name: "Akagera National Park",
      coordinates: [-1.877, 30.717],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "Nyungwe Forest",
      coordinates: [-2.4873, 29.289],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "Volcanoes National Park",
      coordinates: [-1.481, 29.5927],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "Lake Kivu",
      coordinates: [-2.1951, 29.3476],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "King's Palace Museum",
      coordinates: [-2.3423, 29.7553],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "Ethnographic Museum",
      coordinates: [-2.5967, 29.7392],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "Gishwati-Mukura National Park",
      coordinates: [-1.686, 29.3498],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },

    {
      name: "Murambi Genocide Memorial",
      coordinates: [-2.4753, 29.0592],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
    {
      name: "Rubavu",
      coordinates: [-1.7033, 29.2563],
      thumbnail:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    },
  ];

  useEffect(() => {
    const filtered = topDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, [searchTerm]);

  useEffect(() => {
    const map = L.map(mapContainer.current).setView(
      [-1.939539244251883, 29.910648339940828],
      7
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.geoJSON(rwData, {
      style: {
        color: "#626663", // Change this to the color you want for the border
        weight: 3,
        opacity: 0.65,
      },
    }).addTo(map);

    filteredDestinations.forEach((destination) => {
      const marker = L.marker(destination.coordinates, { icon: defaultMarker })
      .addTo(map)
      .bindPopup(
        `<div><h3>${destination.name}</h3><img src="${destination.thumbnail}" alt="${destination.name}" width="150" height="100"/></div>`
      );  
    });

    if (filteredDestinations.length > 0) {
      const firstDestination = filteredDestinations[0];
    }

    return () => {
      map.remove();
    };
  }, [filteredDestinations]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
<div className="about flex h-screen justify-center bg-white text-black p-8 rounded-lg w-full text-center mt-20 ">
  <div className="md:w-1/2 w-full relative ">
    <h2 className="md:text-3xl  font-bold mb-4 text-gray-700  ">Our Top Destinations</h2>
    <div ref={mapContainer} style={{ height: "60%", borderRadius: "20px" }}/>
    <input
      type="text"
      placeholder="Search destinations..."
      value={searchTerm}
      onChange={handleSearchChange}
      className=" bg-white border border-gray-700 rounded-md p-2 mt-4"
    />
  </div>

</div>
  );
};

export default About;
