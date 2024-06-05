import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage/homepage'
import Services from '../components/services';
import TourCards from '../components/TourCards'
import Reviews from '../components/reviews'
import Footer from '../components/Footer'
import BlogsMain from '../components/Blogs/BlogsMain'
import BlogDetails from './BlogDetails'
import About from '../components/About';
import Tours from '../components/tours';
function Home() {
  return (
    <div>
      <HomePage/>
      <Services/>
      <Tours/>
      <About/>
      <BlogsMain/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home;