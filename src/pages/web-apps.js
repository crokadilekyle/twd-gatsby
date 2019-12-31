import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"

export default ({ data }) => (
  <div>
    <Header />
    <h1>Twin Web Development</h1>
    <h4>Web Apps</h4>
    {data.allWordpressWpWebApps.edges.map(({ node }) => (
      <div>
        <Link to={node.slug}>
          <p>{node.title}</p>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </div>
)
export const pageQuery = graphql`
  query {
    allWordpressWpWebApps(sort: { fields: [date] }) {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`