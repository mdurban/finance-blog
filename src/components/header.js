import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className='main-header'>
      <div className='navbar'>
        <div className='navbar-title'>Money Made Easy</div>
        <div className='navbar-nav-elements'>
          <div className='navbar-element'><a className='navbar-link' href='#about'>Home</a></div>
          <div className='navbar-element'><a className='navbar-link' href='#menu'>Blog</a></div>
          <div className='navbar-element'><a className='navbar-link' href='#reviews'>Contact</a></div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
