import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./blogCard";
import blogData from "./blogData.json";

const BlogsMain = () => {
  return (
    <div className="h-3/6 bg-[#466175]">
      <h1 className="text-4xl text-White text-center">Blogs</h1>
      <div className=" flex flex-wrap justify-around items-start overflow-auto">
        {blogData.slice(0, 2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Link to="/blogs" className=" flex text-blue-500 items-center mt-4">
        View More
      </Link>
    </div>
  );
};

export default BlogsMain;
