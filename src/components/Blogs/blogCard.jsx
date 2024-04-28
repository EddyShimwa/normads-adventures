import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <Link to={`/blogs/${blog.id}`} className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={blog.blogImage} alt={blog.blogTitle} />
        </div>
        <div className="p-8">
          <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blog.blogTitle}</h2>
          <p className="mt-2 text-gray-500">{blog.timeCreated}</p>
          <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{blog.blogContent}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;