const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allWordpressWpWebApps {
      edges {
        node {
          type
          title
          slug
          content
        }
      }
    }
    allWordpressWpWebsites {
      edges {
        node {
          title
          slug
          type
          content
        }
      }
    }
      allWordpressPage(filter: {slug: {nin: "privacy-policy"}}) {
        edges {
          node {
            id
            title
            slug
            type
          }
        }
      }
    }
      `).then(result => {
    //create pages for each web app
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
    //create pages for each website
    result.data.allWordpressWpWebsites.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/website.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    //create pages for each static page
    result.data.allWordpressPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}





// gets all webapps
// {
//   allWordpressWpWebApps {
//     edges {
//       node {
//         slug
//         content
//         title
//         type
//       }
//     }
//   }
// }





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