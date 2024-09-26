import React, { useState } from 'react';
import BlogCard from './BlogCard';
import FullBlogPost from './FullBlogPost';
import blogPosts from '../data/blogPosts';

const BlogList = () => {
  const [openPostId, setOpenPostId] = useState(null);

  const handleCardClick = (postId) => {
    setOpenPostId(postId);
  };

  const handleClosePost = () => {
    setOpenPostId(null);
  };

  const openPost = blogPosts.find(post => post.id === openPostId) || null;

  return (
    <>
    <div className="blog-list">
      {blogPosts.map(post => (
        <BlogCard key={post.id} {...post} onClick={() => handleCardClick(post.id)} />
      ))}
      
    </div>
    <FullBlogPost 
        post={openPost}
        isOpen={openPostId !== null}
        onClose={handleClosePost}
      />
    </>
  );
};

export default BlogList;