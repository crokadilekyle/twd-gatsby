const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
        allWordpressWpWebApps {
          edges {
            node {
              slug
              content
              title
              type
            }
          }
        }
      }
      `).then(result => {
        result.data.allWordpressWpWebApps.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/web-app.js`),
                context: {
                    // This is the $slug variable
                    // passed to blog-post.js
                    slug: node.slug,
                },
            })
        })
    })
}












    //gets all types
    // {
    //     allWordpressWpTypes(filter: {name: {nin: ["Blocks", "Media"]}}) {
    //       edges {
    //         node {
    //           id
    //           name
    //           slug
    //         }
    //       }
    //     }
    //   }