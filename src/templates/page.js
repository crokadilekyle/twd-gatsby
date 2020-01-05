import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"

export default ({ data }) => {
    const page = data.allWordpressPage.edges[0].node;

    return (
        <React.Fragment>
            <Header />
            <div>
                <h1>{page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
        </React.Fragment>
    )
}
export const query = graphql`
    query($slug: String!) {
        allWordpressPage(filter: { slug: { nin: "privacy-policy", eq: $slug }}) {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`
