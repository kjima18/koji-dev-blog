import React from "react"
import "../styles/post.css"
import Layout from "../components/layout";
import SEO from "../components/seo"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const SNSSection = ({ title, shareUrl }) => {
  return(
    <div>
      <TwitterShareButton title={title} url={shareUrl} className="mr">
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <FacebookShareButton url={shareUrl} className="mr">
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <LineShareButton url={shareUrl}>
        <LineIcon size={40} round />
      </LineShareButton>
    </div>
  )
}

const Post = ({ location, pageContext }) => {
  const { title, createdAt, image, tags } = pageContext.post;
  const description = pageContext.post.description.description;
  const body = pageContext.post.body.childMarkdownRemark.html;
  const tagLists = pageContext.tags;
  const shareUrl = location.href;

  return(
    <Layout tags={tagLists}>
      <SEO title={title} description={description} />
      <div className="post-header">
        <ul className="post-link-tags">
          {tags && tags.map(({ title, slug }) =>
            <li key={slug}>#{title}</li>
          )}
        </ul>
        <h1>{title}</h1>
        <p className="post-date">{createdAt}</p>
      </div>
      <img src={image.file.url} className="post-image" alt="post-cover"></img>
      <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
      <SNSSection title={title} shareUrl={shareUrl} />
    </Layout>
  )
}

export default Post;
