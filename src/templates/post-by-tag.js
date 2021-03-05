import React from 'react';
import PropTypes from "prop-types"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const PostByTag = ({ pageContext, data }) => {
  const tag = pageContext.tag
  const tags = pageContext.tags
  const posts = data.allContentfulPost

  return(
    <Layout tags={tags}>
      <SEO title={tag} description={tag} />
      {posts && posts.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node}/>
      )}
    </Layout>
  )
}

PostByTag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  })
}

export const query = graphql`
  query allContentfulPostByTag($tag: String) {
    allContentfulPost(filter: {tags: {elemMatch: {slug: {eq: $tag}}}}) {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
          description {
            description
          }
          slug
          tags {
            title
            slug
          }
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`
export default PostByTag;
