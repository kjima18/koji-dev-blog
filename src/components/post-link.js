import React from "react"
import { Link } from 'gatsby';
import "../styles/post-link.css"

const PostLink = ({ post }) => {
  const { title, updatedAt, image } = post;
  const description = post.description.description;
  const pageLink = `/post/${post.slug}/`

  return(
    <Link to={pageLink} className="post-link-anchor">
      <div className="post-link">
        <div>
          <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
        </div>
        <div className="post-link-text">
          <h2>{title}</h2>
          <p className="post-link-body">{description}</p>
          <p className="post-link-date">{updatedAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostLink;
