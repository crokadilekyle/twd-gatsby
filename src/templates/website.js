import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"

export default ({ data }) => {
    const website = data.allWordpressWpWebsites.edges[0].node;

    return (
        <React.Fragment>
            <Header />
            <div>
                <h1>{website.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: website.content }} />
            </div>
        </React.Fragment>
    )
}
export const query = graphql`
    query($slug: String!) {
        allWordpressWpWebsites(filter: { slug: { eq: $slug }}) {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`