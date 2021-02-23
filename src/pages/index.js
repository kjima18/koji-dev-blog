import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"


const Home = ({ data }) => {
  return(
    <Layout>
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
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`