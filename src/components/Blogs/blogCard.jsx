import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../../utils/useScrollReveal";

function BlogCard({ blog }) {
  // Apply scroll reveal animation
  useScrollReveal(".blog-card");

  // Limit blog content to 30 words
  const limitedContent = blog.blogContent.split(" ").slice(0, 30).join(" ") + "...";

  return (
    <div className="blog-card max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-80 w-full object-cover md:w-48" src={blog.blogImage} alt={blog.blogTitle} />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800">{blog.blogTitle}</h2>
          <p className="mt-2 text-gray-600">{blog.timeCreated}</p>
          <p className="mt-2 text-gray-700">{limitedContent}</p>
          <div className="flex justify-end mt-4">
            <Link to={`/blogs/${blog.id}`} className="text-black font-semibold flex items-center">
              Read More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;