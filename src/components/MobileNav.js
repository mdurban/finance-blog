import React from 'react'
import './mobile-nav.css'
import { Link } from "gatsby"

const MobileNav = ({navOpen, toggleMobileNav}) => {
    console.log('nav is open: ', navOpen)
  if(navOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }

  return <div className={`${navOpen && 'modal'}`}>
    <div className='nav-links'>
        <Link onClick={toggleMobileNav} className='nav-item' to='/'>Home</Link>
        <Link onClick={toggleMobileNav} className='nav-item' to='/about'>About</Link>
        <Link onClick={toggleMobileNav} className='nav-item' to='/contact'>Contact</Link>
    </div>
  </div>
}

export default MobileNav