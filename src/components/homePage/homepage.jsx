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
      image:
        "https://images.pexels.com/photos/1238277/pexels-photo-1238277.jpeg",
      title: "Gorilla Tours",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
      {slidesData.map((slideItem, index) => {
        return (
          <div
            key={index}
            className="h-[calc(100vh-80px)] flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${slideItem.image})` }}
          >
            <div> 
            <div className="h-[20vh] md:text-7xl text-3xl font-black w-2/3 items-center justify-center p-8 ml-5 mt-14">
              <p className="text-gray-200 ">DISCOVER THE </p>
              <p className="text-gray-300 opacity-70" >UNSEEN WONDERS.</p>
            </div>
            <div className="absolute bottom-5 h-[25vh] w-1/3 flex items-center justify-center p-8 ml-12 rounded-lg bg-gray-400 bg-opacity-20 backdrop-filter backdrop-blur-sm">
  <div className="text-white">
    <h1 className="text-4xl font-semibold">{slideItem.title}</h1>
    <h1 className="text-lg mt-4">{slideItem.description}</h1>
  </div>
</div>
            </div>
          </div>
        );
      })}
      <div className="container mx-auto">
        <UpcomingTour />
      </div>
    </div>
  );
}
export default HomePage;
