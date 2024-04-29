import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../../utils/useScrollReveal";

function BlogCard({ blog }) {
  // Limit blog content to 30 words
  useScrollReveal(".blog-card");

  const limitedContent = blog.blogContent.split(" ").slice(0, 20).join(" ") + "...";
  
  return (
    <div className="blog-card max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 opacity-50">
      <Link to={`/blogs/${blog.id}`} className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-56 w-full object-cover md:w-48" src={blog.blogImage} alt={blog.blogTitle} />
        </div>
        <div className="p-8">
          <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blog.blogTitle}</h2>
          <p className="mt-2 text-gray-500">{blog.timeCreated}</p>
          <p className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">{limitedContent}</p>
          <div className="flex justify-center mt-4">
            <Link to={`/blogs/${blog.id}`} className="text-indigo-500 inline-flex items-center">Read More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;