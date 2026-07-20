import './blog.css'
import { Link } from 'react-router-dom';
import React from 'react';

const BlogModal = ({
    blogPostLink,
    category,
    blogTitle,
    author,
    postDate,
    excerpt,
    blogImgLink
    }
) => {
    //const today = new Date().toDateString
    return (
    <>
    <div className="article post-list-item ">
        <div className=" post-thumb ">
            <Link to={blogPostLink}> 
                <img width="343" height="200" 
                src={blogImgLink} 
                className="" 
                alt="" decoding="async" fetchpriority="high" 
                sizes="(max-width: 343px) 100vw, 343px" />
            </Link>
        </div>
        <div className="post-details">
            <span className="category-label badge">{category}</span>       
            <h2 className="post-title h4 ">
                <Link to={blogPostLink}> 
                    {blogTitle}
                </Link>
            </h2>
            <div className="post-meta">
                <span className="author">By : {author}</span> 
                 <span className="date"> | {postDate ? postDate : new Date().toDateString()}</span>
            </div>
            <div className="excerpt">
                <p>
                    {excerpt}
                </p>
            </div>
        </div>
    </div>

    <div className="separator"></div> 
    </>
    )
}

export default BlogModal;