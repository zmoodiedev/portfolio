import React from 'react';
import BlogImage2 from '../../assets/images/frustrated_man.webp';

const BlogPost2 = () => {
  return (
    <div>
      <h1>Blog Post 2 Title</h1>
      <p>This is the content of blog post 1. You can use any HTML elements here.</p>
      <ul>
        <li>Point 1</li>
        <li>Point 2</li>
      </ul>
      {/* Add more HTML content as needed */}
    </div>
  );
};

BlogPost2.image = BlogImage2;
BlogPost2.title = "Post 2";
BlogPost2.date = new Date('2024-10-02');
BlogPost2.excerpt = "This is an excerpt for Blog Post 2";

export default BlogPost2;