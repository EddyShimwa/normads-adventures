import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header";
import UpcomingTour from "../upcomings";
import "./HomePage.css";

function HomePage() {
  const mainSlider = useRef();
  const thumbnailSlider = useRef();
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);


  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbnailSlider.current);
  }, []);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: nav2,
    beforeChange: (current, next) => {
      setSelectedThumbnailIndex(next);
      setCurrentSlideIndex(next);
    },
  };
  

  const settingsThumbnails = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav1,
    initialSlide: 0,
    afterChange: (index) => setSelectedThumbnailIndex(index),
  };
  

  let slidesData = [
    {
      image: "https://images.pexels.com/photos/1238277/pexels-photo-1238277.jpeg",
      title: "Gorilla Tours",
      description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  
  {
  image:
    "https://images.pexels.com/photos/1273443/pexels-photo-1273443.jpeg",
  title: "Canopy Walk",
  description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  image:
    "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg",
  title: "Camping Tours",
  description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  image:
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
  title: "Mountain Climbing",
  description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  image:
    "https://images.pexels.com/photos/16444284/pexels-photo-16444284/free-photo-of-a-safari-vehicle-on-a-grass-field.jpeg",
  title: "Safari Tours",
  description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  image:
    "https://images.pexels.com/photos/5531585/pexels-photo-5531585.jpeg",
  title: "Safari Tours",
  description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  ];

  return (
    <>
      <div className="slider-container relative" style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden"}}>
        <Slider {...settingsMain} ref={mainSlider}>
          {slidesData.map((slide, index) => (
            <div
            key={index}
            className="fade-in"
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${slide.image})`,
              transition: "background-image 0.5s ease-in-out",
            }}
          >
          
              <div style={{ height: "100vh", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${slide.image})` }}>
                <Header />
                <UpcomingTour />
                <div className="absolute top-12 ml-8 flex flex-col items-start">
                  <div>
                    <h1 className="text-6xl w-1/2 font-bold text-white p-5 mt-2">NOMADS</h1>
                    <h1 className="text-6xl w-1/2 font-bold text-gray-100 opacity-70 p-5 -mt-8">ADVENTURES</h1>
                  </div>

                  <div className={`mt-[15%] w-4/5 flex flex-col items-start ${currentSlideIndex === index ? 'slide-in' : ''}`}>
                    <h1 className="text-7xl font-bold text-gray-100 mt-8 mb-6 underline mr-4">{slide.title}</h1>
                    <h1 className="w-1/3 text-gray-200 leading-relaxed tracking-wider text-left">{slide.description}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div style={{ position: "absolute", bottom: "10px", right: "2%", width: "30%" }}>
          <Slider {...settingsThumbnails} ref={thumbnailSlider}>
            {slidesData.map((slide, index) => (
              <div key={index}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ overflow: "hidden", height: "20vh", width: "auto", position: "relative" }}>
                    <img src={slide.image} alt="" style={{ padding: "10px", objectFit: "cover", height: "100%", width: "100%", borderRadius: 0 }} />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-[10px]" style={{ width: "100%" }}>
                      <h3 className="text-white">{slide.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomePage;














