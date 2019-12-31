import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
    const webapp = data.allWordpressWpWebApps.edges[0].node;

    return (
        <div>
            <h1>{webapp.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: webapp.content }} />
        </div>
    )
}
export const query = graphql`
    query($slug: String!) {
        allWordpressWpWebApps(filter: { slug: { eq: $slug }}) {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`