import React from "react";
import "./BlogCard.css";

const BlogCard = ({id, image, title, date, excerpt, onClick}) => {

    const formattedDate = date instanceof Date ? date.toLocaleDateString() : '';

    return (
        <div className={`blog-card-${id}`} onClick={onClick}>
            <div className="feature-img">
                <img src={image} alt={title} />
            </div>
            <div className="blog-details">
                <h3 className="blog-title">{title}</h3>
                {formattedDate && <span className="blog-date">{formattedDate}</span>}
                <span className="blog-tease">{excerpt}</span>
                <a href={`/blog/${id}`} className="blog-link">Read More</a>
            </div>
        </div>
    )
}

export default BlogCard;