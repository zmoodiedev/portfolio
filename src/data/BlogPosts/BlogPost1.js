import React from 'react';
import BlogImage1 from '../../assets/images/frustrated_man.webp';

const BlogPost1 = () => {
  return (
    <>
      <h1>One Step at a Time</h1>
      <p>Hi there! I'm Zach, and welcome to my blog. This is my first post, and I'm excited to start writing about my experiences and thoughts. Writing is hard for me, but I'm going to try this out and see how it goes. You gotta start somewhere, right?</p>
    </>
  );
};

BlogPost1.image = BlogImage1;
BlogPost1.title = "One Step at a Time";
BlogPost1.date = new Date('2024-09-02');
BlogPost1.excerpt = "This is an excerpt for Blog Post 1";

export default BlogPost1;