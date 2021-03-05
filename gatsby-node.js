const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      allContentfulPost(sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            title
            image {
              file {
                url
              }
            }
            body {
              childMarkdownRemark {
                html
              }
            }
            createdAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            description {
              description
            }
            slug
            tags {
              title
              slug
            }
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
  )

  if (result.errors) {
    reporter.panicOnBuilder(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulPost
  const tags = result.data.allContentfulTag.edges

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        post: edge.node,
        tags: tags
      }
    })
  });

  tags.forEach(tag => {
    createPage({
      path: `/${tag.node.slug}/`,
      component: path.resolve("./src/templates/post-by-tag.js"),
      context: {
        tag: tag.node.slug,
        tags: tags
      }
    })
  });
}