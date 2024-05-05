import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../components/Blogs/blogData.json';

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find(b => b.id === Number(id));

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-700 ">NORMADS ADVENTURES</h1>
      {blog ? (
        <div className="container w-full md:w-3/4 flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
          <img className="w-full h-80 object-cover rounded-t-lg" src={blog.blogImage} alt={blog.blogTitle} />
          <h2 className="text-2xl font-bold mt-4">{blog.blogTitle}</h2>
          <p className="text-gray-500 mt-2">{blog.timeCreated}</p>
          <p className="mt-4 text-gray-700">{blog.blogContent}</p>
          <button onClick={goBack} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Go Back
          </button>
        </div>
      ) : (
        <p className="text-xl text-red-500">Blog not found</p>
      )}
    </div>
  );
}

export default BlogDetails;