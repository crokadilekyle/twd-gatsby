import React from 'react'
import headerStyles from "./modules/header.module.css"
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
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.navlinks}>
                    <li className={headerStyles.navbrand}><Link className={headerStyles.navlink} to='/' >Twin Web Development</Link></li>

                    {data.allWordpressMenusMenusItems.nodes.map((node) => (

                        node.items.map((item) => (
                            <li><Link
                                className={headerStyles.navlink}
                                to={item.slug === null ?
                                    item.title.replace(" ", "-").toLowerCase()
                                    :
                                    item.slug}>
                                {item.title}
                            </Link>
                            </li>
                        ))

                    ))}
                </ul>
            </nav>
        </header >
    )
}

