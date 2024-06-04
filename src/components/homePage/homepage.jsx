import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../header";
import UpcomingTour from "../upcomings";
import bg from "../../assets/bg.jpg";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (src) {
      observer.observe(document.querySelector(`img[data-src="${src}"]`));
    }

    return () => {
      if (src) {
        observer.unobserve(document.querySelector(`img[data-src="${src}"]`));
      }
    };
  }, [src]);

  return (
    <img
      src={loaded ? src : ""}
      alt={alt}
      data-src={src}
      onLoad={() => setLoaded(true)}
      className="w-full h-full object-cover"
    />
  );
};

function HomePage() {
  const mainSlider = useRef();
  const thumbnailSlider = useRef();
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(bg);

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
    autoplaySpeed: 5000,
    asNavFor: nav2,
    beforeChange: (current, next) => {
      setSelectedThumbnailIndex(next);
      setCurrentSlideIndex(next);
      setBackgroundImage(slidesData[next].image);
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
      image: "https://images.pexels.com/photos/1273443/pexels-photo-1273443.jpeg",
      title: "Canopy Walk",
      description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg",
      title: "Camping Tours",
      description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
      title: "Mountain Climbing",
      description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "https://images.pexels.com/photos/16444284/pexels-photo-16444284/free-photo-of-a-safari-vehicle-on-a-grass-field.jpeg",
      title: "Safari Tours",
      description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "https://images.pexels.com/photos/5531585/pexels-photo-5531585.jpeg",
      title: "Safari Tours",
      description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar
  const [modalOpen, setModalOpen] = useState(false); // State to toggle modal

  const toggleSidebar = () => {
    // Function to toggle sidebar
    setSidebarOpen(!sidebarOpen);
  };

  const toggleModal = () => {
    // Function to toggle modal
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <Slider {...settingsMain} ref={mainSlider}>
          {slidesData.map((slideItem, index) => (
            <div key={index} className="custom-slide">
              <div
                className="h-[90vh] flex flex-col bg-cover bg-center justify-between"
                style={{ backgroundImage: `url(${slideItem.image})` }}
              >
<div className="md:h-[25vh] h-[12vh]  md:text-5xl text-xs font-black md:w-fit w-1/4 items-center justify-center md:p-8 p-3 ml-5 mt-14 bg-black bg-opacity-30 text-white">
  <p className="text-gray-100 ">DISCOVER THE  </p>
  <p className="text-gray-200 opacity-90" >UNSEEN WONDERS...</p>
</div>
             
<div className="h-[20vh] md:mt-20 mt-8 flex flex-col md:p-8 p-2 text-justify ml-5 mb-5 rounded-lg bg-black bg-opacity-30 text-gray-200 w-1/2">
  <h1 className="md:text-4xl font-semibold">{slideItem.title}</h1>
  <h1 className="md:text-lg text-xs md:mt-4 mt-2">{slideItem.description}</h1>
</div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto">
        <UpcomingTour />
      </div>
    </div>
  );
}

export default HomePage;
