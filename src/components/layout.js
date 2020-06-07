import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import favicon from '../images/favicon.png';
import GlobalHeader from "./GlobalHeader";
import "./layout.scss";
import MobileNavContainer from "./MobileNav";

const Layout = ({ children }) => {
  const renderHomePageNavBar = children && children.props && children.props.className === 'home-page'

  return <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <div className='app-container' >
      <MobileNavContainer />
      <GlobalHeader isOnHomePage={renderHomePageNavBar} />
      <main className='content-container'>{children}</main>
      <div className='footer'>
        <div className='footer-content'>
          <Link className='footer-link' to="/disclaimer/">Disclaimer and Privacy Policy</Link>
          <div className='copyright'>© 2020 MoneyForNoobs</div>
        </div>
      </div>
    </div>

  </>
}

export default Layout
