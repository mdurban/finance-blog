/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.scss"
import MobileNavContainer from "./MobileNav";
import GlobalHeader from "./GlobalHeader";

const Layout = ({ children, }) => {
  const renderHomePageNavBar = children[0] && children[0].props && children[0].props.title === 'Home'

  return <StaticQuery
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
        <MobileNavContainer />
        <GlobalHeader isOnHomePage={renderHomePageNavBar} />
        <div className='app-container' >
          <main className='content-container'>{children}</main>
          <div className='footer'>
            <div className='footer-content'>
              <Link className='footer-link' to="/disclaimer/">Disclaimer and Privacy Policy</Link>
              <div className='copyright'>© 2019 MoneyForNoobs</div>
            </div>
          </div>
        </div>

      </>
    )}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
