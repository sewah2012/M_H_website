import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './NavBar.css'
import { IconButton } from '@material-ui/core'
import MobileMenu from './MobileMenu'

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openDrawer = () => {
    document.querySelector('.mobileMenu').classList.add('open')
    setMobileMenuOpen(true)
  }

  const closeDrawer = () => {
    document.querySelector('.mobileMenu').classList.remove('open')
    setMobileMenuOpen(false)
  }

  return (
    <div className="menu">
      <div className="navBar">
        <Link to="/">
          {' '}
          <div className="navBar__brand">
            <img src="assets/images/logo.jpg" alt="brand" />
          </div>
        </Link>

        <div className="mobileMenuBar">
          {mobileMenuOpen ? (
            <IconButton onClick={closeDrawer}>
              <CloseIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton onClick={openDrawer}>
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </div>

        <div className="navBar__menu">
          <ul className="navBar__menu-items">
            <li className="navBar__menu-item">
              <Link to="/"> Home</Link>
            </li>
            <li className="navBar__menu-item">
              <Link to="/about"> About-us</Link>
            </li>
            <li className="navBar__menu-item">
              <Link to="/services"> Services</Link>
            </li>
            <li className="navBar__menu-item">
              <Link to="/portfolio"> Portfolio</Link>
            </li>
            <li className="navBar__menu-item">
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <MobileMenu className="mobileMenu" />
    </div>
  )
}

export default NavBar
