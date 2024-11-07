import React from 'react';
import BlogImage1 from '../../assets/images/cheer_tn.jpg';

const BlogPost1 = () => {

  const formattedDate = BlogPost1.date instanceof Date ? BlogPost1.date.toLocaleDateString() : '';

  return (
    <>
      <div className="blog-body">
        <h1 className='blog-title'>{BlogPost1.title}</h1>
        <p className="blog-date">Posted: {formattedDate}</p>
        <p>Hi there! I'm Zach, and welcome to my first post. I'm excited to start writing about my experiences and thoughts regarding Web Design/Development, and keep track of my journey.</p>

        <p>Writing is hard for me, but I'm going to try this out and see how it goes. For now this is just short and sweet.</p>
      </div>
    </>
  );
};

BlogPost1.image = BlogImage1;
BlogPost1.title = "One Step at a Time";
BlogPost1.date = new Date('2024-10-03');
BlogPost1.excerpt = "You gotta start somewhere!";

export default BlogPost1;