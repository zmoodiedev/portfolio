import React from 'react';
import './FullBlogPost.css';

const FullBlogPost = ({ post, isOpen, onClose }) => {
  if (!post) {
    return null;
  }

  return (
    <div className={`full-blog-post ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <h2 className="blog-title">{post.title}</h2>
      <p className="date">{post.date}</p>
      <div className="content">
        {post.content}
      </div>
    </div>
  );
};

export default FullBlogPost;