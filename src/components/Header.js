import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                allWordpressMenusMenusItems {
                    nodes {
                        items {
                            title
                            slug
                        }
                    }
                }
            }
        `
    )

    return (
        <header>
            <ul>
                <Link to='/' ><li>Twin Web Development</li></Link>

                {data.allWordpressMenusMenusItems.nodes.map((node) => (

                    node.items.map((item) => (
                        <li><Link to={item.slug === null ? item.title.replace(" ", "-").toLowerCase() : item.slug}>{item.title}</Link></li>
                    ))

                ))}

                {/* {data.allWordpressMenusMenusItems.nodes.items.map(({ item }) => (
                    <li><Link to={item.url}>{item.title}</Link></li>
                ))} */}
            </ul>
        </header>
    )
}

