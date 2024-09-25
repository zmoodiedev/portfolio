import React from "react";
import blogPosts from "../data/blogPosts";
import BlogCard from "./BlogCard";
import "./BlogList.css";

const BlogList = () => {
    return (
        <div className="blog-list">
            {blogPosts.map(post => (
                <BlogCard key={post.id} {...post} />
            ))}
        </div>
    )
}

export default BlogList;