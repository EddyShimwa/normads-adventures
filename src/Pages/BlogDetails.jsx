import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === Number(id));

  return (
    <div>
      <Header />
      {blog ? (
        <div>
          <img src={blog.blogImage} alt={blog.blogTitle} />
          <h2>{blog.blogTitle}</h2>
          <p>{blog.timeCreated}</p>
          <p>{blog.blogContent}</p>
        </div>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
}

export default BlogDetails;