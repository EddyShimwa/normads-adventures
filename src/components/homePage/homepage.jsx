import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header";
import UpcomingTour from "../upcomings";
import "./HomePage.css"

function HomePage() {
  const mainSlider = useRef();
  const thumbnailSlider = useRef();

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: thumbnailSlider.current,
  };

  const settingsThumbnails = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: mainSlider.current,
    initialSlide: 0,
  };

  let images = [
    "https://images.pexels.com/photos/1460222/pexels-photo-1460222.jpeg",
    "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg",
    "https://images.pexels.com/photos/2912996/pexels-photo-2912996.jpeg",
  ];

  return (
    <div className="slider-container" style={{ height: "100vh", width: "100%"}}>
      <Slider {...settingsMain} ref={(slider) => (mainSlider.current = slider)}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${image})`,
              }}
            >
                <UpcomingTour />
                <div className="absolute top-0 ml-8 flex flex-col items-start">
  <h1 className="text-6xl w-1/2 font-bold text-white p-5 mt-8">
    NOMADS
  </h1>
  <h1 className="text-6xl w-1/2 font-bold text-gray-100 opacity-50 p-5 -mt-8">
    ADVENTURES
  </h1>
  <p className="w-3/4 text-gray-500 text-justify">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Consequuntur quibusdam
  </p>
</div>
            </div>
          </div>
        ))}
      </Slider>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "30%",
        }}
      >
        <Slider
          {...settingsThumbnails}
          ref={(slider) => (thumbnailSlider.current = slider)}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt=""
                style={{
                  borderRadius: "10%",
                  objectFit: "cover",
                  height: "20vh",
                  width: "auto",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
