import React from "react";
import "./BlogCard.css";

const BlogCard = ({id, image, title, date, onClick}) => {

    const formattedDate = date instanceof Date ? date.toLocaleDateString() : '';

    return (
        <div className={`blog-card-${id}`} onClick={onClick}>
            <div className="feature-img">
                <img src={image} alt={title} />
            </div>
            <div className="blog-details">
                <h3 className="blog-title">{title}</h3>
                {formattedDate && <span className="blog-date">{formattedDate}</span>}
            </div>
        </div>
    )
}

export default BlogCard;