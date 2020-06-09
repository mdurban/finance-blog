import { Link } from "gatsby";
import React from "react";
import favicon from '../../images/favicon.png';
import GlobalHeader from "../GlobalHeader";
import MobileNavContainer from "../MobileNav";
import "./layout.scss";

const Layout = ({ children }) => {
  const renderHomePageNavBar = children && children.props && children.props.className === 'home-page'

  return <>
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
