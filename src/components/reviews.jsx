import React from "react";
import Slider from "react-slick";
import bg from '../assets/bg.jpg'; // adjust the path as needed
import profileImage from '../assets/profile.jpg'; // adjust the path as needed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data
const sampleReviews = [
    {
        profileImage: profileImage,
        content: 'This is a great product. I really love it! Highly recommended. Thank you!',
        country: 'USA'
    },
    {
        profileImage: profileImage,
        content: 'Amazing! This product exceeded my expectations.',
        country: 'Canada'
    },
    {
        profileImage: profileImage,
        content: 'Fantastic service! I\'ve never been more satisfied with a product. Will definitely buy again.',
        country: 'Australia'
    },
    {
        profileImage: profileImage,
        content: 'Excellent quality and fast shipping. Couldn\'t be happier with my purchase.',
        country: 'UK'
    },
    {
        profileImage: profileImage,
        content: 'Absolutely love it! The best product I\'ve ever bought. Will recommend to all my friends.',
        country: 'Germany'
    }
    // Add more reviews as needed
];

export default function SimpleSlider() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000, // Transition every 2 seconds
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 
      };
  return (
    <div className="mx-auto h-[60vh] bg-gray-200 bg-cover"  style={{ backgroundImage: `url(${bg})`, zIndex: -1 }}> {/* Adjust the width as needed */}
<h2 className="flex text-3xl justify-center items-center w-full m-auto py-8">Clients Testimonials</h2>
<Slider {...settings} className="w-1/2 m-auto">
  {sampleReviews.map((review, index) => (
    <div key={index} className="flex flex-col items-center justify-center p-8 bg-gray-200 rounded-lg shadow-lg ">
      <img src={review.profileImage} alt="Profile" className="rounded-full -mt-12" />
      <h3 className="text-lg font-semibold text-gray-700">{review.country}</h3>
      <p className="mt-2 text-center text-gray-600">{review.content}</p>
    </div>
  ))}
</Slider>
    </div>
  );
}