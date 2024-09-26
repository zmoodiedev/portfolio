import React from "react";
import "./BlogCard.css";

const BlogCard = ({id, img, title, date, tease, onClick}) => {
    return (
        <div className={`blog-card-${id}`} onClick={onClick}>
            <div className="feature-img">
                <img src={img} alt={title} />
            </div>
            <div className="blog-details">
                <h3 className="blog-title">{title}</h3>
                <span className="blog-date">{date}</span>
                <span className="blog-tease">{tease}</span>
            </div>
        </div>
    )
}

export default BlogCard;