import React, { useState } from 'react';
import BlogCard from './BlogCard';
import FullBlogPost from './FullBlogPost';
import './BlogList.css';

// Import individual blog post components
import BlogPost1 from '../data/BlogPosts/BlogPost1';
import BlogPost2 from '../data/BlogPosts/BlogPost2';

const blogPosts = [
  { id: 1, component: BlogPost1 },
  { id: 2, component: BlogPost2 },
];

const BlogList = () => {
  const [openPostId, setOpenPostId] = useState(null);

  const handleCardClick = (postId) => {
    setOpenPostId(postId);
  };

  const handleClosePost = () => {
    setOpenPostId(null);
  };

  const openPost = blogPosts.find(post => post.id === openPostId) || null;

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
            onClick={() => handleCardClick(post.id)} 
          />
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