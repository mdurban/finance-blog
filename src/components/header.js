import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className='main-header'>
      <div className='navbar'>
        <div className='navbar-title'><Link className='hide-linkiness' to='/'>moneyfor<span className='partial-title'>noobs</span></Link></div>
        <div className='navbar-nav-elements'>
          <div className='navbar-element'><Link className='navbar-link' to='/'>Home</Link></div>
          <div className='navbar-element'><Link className='navbar-link'>Blog</Link></div>
          <div className='navbar-element'><Link className='navbar-link'>Contact</Link></div>
        </div>
      </div>
    </div>
    <hr className='divider' />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
