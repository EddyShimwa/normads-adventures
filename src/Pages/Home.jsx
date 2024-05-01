import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage/homepage'
import Services from '../components/services';
import TourCards from '../components/TourCards'
import Reviews from '../components/reviews'
import BookingCard from '../components/bookingCard'
import Footer from '../components/Footer'
import BlogsMain from '../components/Blogs/BlogsMain'
import BlogDetails from './BlogDetails'
import About from '../components/About';

function Home() {
  return (
    <div>
      <HomePage/>
      <Services/>
      <TourCards/>
      <BlogsMain/>
      <About/>
      <Reviews/>
      <BookingCard/>
      <Footer/>
    </div>
  )
}

export default Home;