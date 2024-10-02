import React from 'react';
import './FullBlogPost.css';

const FullBlogPost = ({ post, isOpen, onClose }) => {
  if (!post || !isOpen) {
    return null;
  }

  const PostComponent = post.component;

  return (
    <div className={`full-blog-post ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <div className="content">
        <PostComponent />
      </div>
    </div>
  );
};

export default FullBlogPost;