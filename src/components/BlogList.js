import React, { useState } from 'react';
import BlogCard from './BlogCard';
import FullBlogPost from './FullBlogPost';
import './BlogList.css';

// Import individual blog post components
import BlogPost1 from '../data/BlogPosts/BlogPost1';

const blogPosts = [
  { id: 1, component: BlogPost1 },
];

const BlogList = () => {
  const [openPost, setOpenPost] = useState(null);

  const handleCardClick = (post) => {
    setOpenPost(post);
  };

  const handleClosePost = () => {
    setOpenPost(null);
  };

  // Sort blog posts by date, most recent first
  const sortedBlogPosts = [...blogPosts].sort((a, b) => 
    b.component.date - a.component.date
  );

  return (
    <>
      <div className="blog-list">
        {sortedBlogPosts.map(post => (
          <BlogCard 
            key={post.id} 
            id={post.id}
            title={post.component.title}
            image={post.component.image}
            excerpt={post.component.excerpt}
            date={post.component.date}
            onClick={() => handleCardClick(post)} 
          />
        ))}
      </div>
      <FullBlogPost 
        post={openPost}
        isOpen={openPost !== null}
        onClose={handleClosePost}
      />
    </>
  );
};

export default BlogList;