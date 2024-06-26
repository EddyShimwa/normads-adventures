import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./reviews.css";

const sampleReviews = [
  {
      profileImage: "https://media.istockphoto.com/id/537173117/photo/smiling-beautiful-girl.jpg?s=612x612&w=0&k=20&c=exUfmUM7rc4uIvBRU4dBt2SiTWtY84CeXa-qnR1fInk=",
      content: 'The tour was amazing! Our guide was very knowledgeable and the scenery was breathtaking. Highly recommended!',
      country: 'USA'
  },
  {
      profileImage: "https://media.istockphoto.com/id/580109640/photo/smiling-man.jpg?s=612x612&w=0&k=20&c=ez6cfFhY1gXPDMblpv81X1E46wJYXD1O9VBawnR-p7Y=",
      content: 'I had a fantastic time on this tour. The itinerary was well planned and the accommodations were top notch.',
      country: 'Canada'
  },
  {
      profileImage: "https://media.istockphoto.com/id/1008700308/photo/smiling-young-woman.jpg?s=612x612&w=0&k=20&c=fT_QKh42Gd_5X7t-hAxJITte57xDuPuNqiVAhKYvcVw=",
      content: 'This was the best vacation I\'ve ever had. The tour was well organized and the staff were very friendly and helpful.',
      country: 'Netherlands'
  },
  {
      profileImage: "https://media.istockphoto.com/id/1562501992/photo/close-up-of-cheerful-african-man-standing-outdoors-in-garden.jpg?s=612x612&w=0&k=20&c=K28HP_GBBVR5-z1ke7CGDe7gEVADBdvwdBrWYAHVn8c=",
      content: 'The tour exceeded my expectations. The guide was very informative and the locations we visited were stunning.',
      country: 'Uganda'
  },
  {
      profileImage: "https://media.istockphoto.com/id/537173117/photo/smiling-beautiful-girl.jpg?s=612x612&w=0&k=20&c=exUfmUM7rc4uIvBRU4dBt2SiTWtY84CeXa-qnR1fInk=",
      content: 'I absolutely loved this tour! The activities were fun and the guide was great. I would definitely recommend this to my friends.',
      country: 'Germany'
  }
];

export default function SimpleSlider() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 200000, // Transition every 2 seconds
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2, 
      };
  
  return (  
    <div className="reviews flex h-screen bg-white"> 

      <Slider {...settings} className="md:w-1/2 w-full m-auto">
        {sampleReviews.map((review, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg shadow-lg md:h-[20vh] m-4">
  <img src={review.profileImage} alt="Profile" className="flex rounded-full justify-center m-auto h-24 object-cover border-2 border-gray-300" />
  <p className="mt-2 mb-4 text-center text-gray-600 px-4">{review.content}</p>
  <h3 className="absolute md:bottom-2 bottom-1 left-0 right-0 text-center text-sm font-semibold text-gray-700">{review.country}</h3>
</div>
        ))}
      </Slider>
    </div>
  );
}