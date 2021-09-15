import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {

    const data = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <div>
            <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}