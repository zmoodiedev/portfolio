import React from 'react';
import BlogImage1 from '../../assets/images/cheer_tn.jpg';

const BlogPost1 = () => {
  return (
    <>
      <h1 className='blog-title'>One Step at a Time</h1>
      <p>Hi there! I'm Zach, and welcome to my first post. I'm excited to start writing about my experiences and thoughts regarding Web Design/Development, and keep track of my journey.</p>

      <p>Writing is hard for me, but I'm going to try this out and see how it goes. For now this is just short and sweet.</p>
    </>
  );
};

BlogPost1.image = BlogImage1;
BlogPost1.title = "One Step at a Time";
BlogPost1.date = new Date('2024-10-03');
BlogPost1.excerpt = "You gotta start somewhere!";

export default BlogPost1;