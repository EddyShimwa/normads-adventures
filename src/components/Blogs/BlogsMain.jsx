import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./blogCard";
import blogData from "./blogData.json";

const BlogsMain = () => {
  return (
    <div className="flex flex-col h-[70vh] bg-gray-300 items-center justify-between p-5">
      <h1 className="text-4xl text-White text-center">Blogs</h1>
      <div className=" flex flex-wrap overflow-auto gap-8">
        {blogData.slice(0, 2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Link to="/blogs" className=" flex text-black font-bold  rounded-lg bg-white p-5 items-center mt-4">
        View More
      </Link>
    </div>
  );
};

export default BlogsMain;
