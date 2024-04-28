import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/homepage'
import Tours from '../components/tours'
import TourCards from '../components/TourCards'
import Reviews from '../components/reviews'
import BookingCard from '../components/bookingCard'
import Footer from '../components/Footer'
import BlogsMain from '../components/Blogs/BlogsMain'
import BlogDetails from './BlogDetails'

function Home() {
  return (
    <div>
      <HomePage/>
      <Tours/>
      <TourCards/>
      <BlogsMain/>
      <Reviews/>
      <BookingCard/>
      <Footer/>
    </div>
  )
}

export default Home;