import React from "react";
import BlogList from "./BlogList";
import './Blog.css';

const Blog = () => {

    return (
        <>     
            <h2>Blog</h2>
            <div id="blogsWrap">
                <BlogList />
            </div>
        </>
    )
};

export default Blog;