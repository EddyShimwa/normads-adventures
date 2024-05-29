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
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar
  const [modalOpen, setModalOpen] = useState(false); // State to toggle modal

  const toggleSidebar = () => { // Function to toggle sidebar
    setSidebarOpen(!sidebarOpen);
  };

  const toggleModal = () => { // Function to toggle modal
    setModalOpen(!modalOpen);
  };

  return (
<div>
  {slidesData.map((slideItem, index) => {
    return (
      <div key={index}
        className="relative flex flex-col items-start h-screen bg-cover bg-center justify-center"
        style={{ backgroundImage: `url(${slideItem.image})` }}
      >
        <Header />
        <div className="h-[60vh] bg-red-300 w-1/4 flex items-center justify-center p-5 m-5">
          <div className="text-white">
            <div className="mb-20">
              <h1 className="text-6xl font-bold">NOMADS</h1>
              <h1 className="text-6xl font-bold">ADVENTURES</h1>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">{slideItem.title}</h1>
              <h1 className="text-lg mt-4">{slideItem.description}</h1>
            </div>
          </div>
          <div className="w-full py-8">
            {/* Add your other components or content here */}
          </div>
        </div>
      </div>
    )
  })}
  <div className="container mx-auto">
  <UpcomingTour />
  </div>
</div>
  )
}
export default HomePage;
