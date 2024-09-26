import React from 'react';
import './FullBlogPost.css';

const FullBlogPost = ({ post, isOpen, onClose }) => {
  if (!post) {
    return null;
  }

  return (
    <div className={`full-blog-post ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <h2>{post.title}</h2>
      <p className="date">{post.date}</p>
      <div className="content">
        {/* Replace this with the full content of your blog post */}
        <p>{post.tease}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  );
};

export default FullBlogPost;