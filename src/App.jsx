import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import BlogsMain from './components/Blogs/BlogsMain';
import BlogDetails from './Pages/BlogDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
    </Routes>
  )
}

export default App;