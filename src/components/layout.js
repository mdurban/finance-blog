/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import "./layout.css"
import MobileNavConnector from "./MobileNavConnector";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <MobileNavConnector />
        <Header />
        <div
          style={{
            margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <div className='footer'>
          <div className='footer-content'>
            <Link className='footer-link' to="/disclaimer/">Disclaimer and Privacy Policy</Link>
            <div className='copyright'>© 2019 MoneyForNoobs</div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
