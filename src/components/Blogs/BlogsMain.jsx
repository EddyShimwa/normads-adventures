import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './blogCard';
import blogData from './blogData.json';

const BlogsMain = () => {
    return (
        <div className='h-screen flex flex-wrap justify-around items-start overflow-auto'>
            {blogData.slice(0, 4).map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
            <Link to="/blogs" className="text-blue-500 self-end mt-4">View More</Link>
        </div>
    )
}

export default BlogsMain;