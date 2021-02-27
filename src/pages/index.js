import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  return(
    <Layout tags={data.allContentfulTag.edges}>
      <SEO title="Koji Dev Blog" description="created by Gatsby.js" />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node}/>
      )}
    </Layout>
  )
}

export default Home;

export const query = graphql`
  query allContentfulPost {
    allContentfulPost {
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
    allContentfulTag {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`