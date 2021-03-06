import React, { useEffect } from 'react'
import './mobile-nav.scss'
import { Link } from "gatsby"

const MobileNav = ({ navOpen, toggleMobileNav }) => {
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  })

  return <div className={`${navOpen && 'modal'}`}>
    <div className='nav-links'>
      <Link onClick={toggleMobileNav} className='nav-item' to='/'>Home</Link>
      <Link onClick={toggleMobileNav} className='nav-item' to='/#blogs'>Blog</Link>
      <Link onClick={toggleMobileNav} className='nav-item' to='/glossary'>Glossary</Link>
      <Link onClick={toggleMobileNav} className='nav-item' to='/about'>About</Link>
      <Link onClick={toggleMobileNav} className='nav-item' to='/contact'>Contact</Link>
    </div>
  </div>
}

export default MobileNav