import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"

export default ({ data }) => {
    const webapp = data.allWordpressWpWebApps.edges[0].node;

    return (
        <React.Fragment>
            <Header />
            <div>
                <h1>{webapp.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: webapp.content }} />
            </div>
        </React.Fragment>
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