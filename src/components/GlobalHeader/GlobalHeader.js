import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import HamburgerMenuContainer from "../HamburgerMenu";

const GlobalHeader = ({ isOnHomePage }) => (
  <header>
    <MobileNavbar />
    <DesktopNavbar isOnHomePage={isOnHomePage} additionalClass={isOnHomePage ? 'full-navbar' : ''} />
  </header>
)

const DesktopNavbar = ({ isOnHomePage, additionalClass }) => (
  <div className={`desktop ${additionalClass}`}>
    <div className='navbar'>
      <div className='navbar-title'><Link className='hide-linkiness' to='/'>moneyfor<span className='partial-title'>noobs</span></Link></div>
      <div className='navbar-nav-elements'>
        <div className='navbar-element'><Link className='navbar-link' to='/'>Home</Link></div>
        <div className='navbar-element'><Link className='navbar-link' to='#blogs'>Blog</Link></div>
        <div className='navbar-element'><Link className='navbar-link' to='/about/'>About</Link></div>
        <div className='navbar-element'><Link className='navbar-link' to='/contact/'>Contact</Link></div>
      </div>
    </div>
    {
      !isOnHomePage && <hr className='title-divider' />
    }
  </div>
)

const MobileNavbar = () => (
  <div className='mobile-only'>
    <HamburgerMenuContainer />
  </div>

)

GlobalHeader.propTypes = {
  siteTitle: PropTypes.string,
}

GlobalHeader.defaultProps = {
  siteTitle: ``,
}

export default GlobalHeader
