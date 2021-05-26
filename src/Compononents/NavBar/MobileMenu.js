import './MobileMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <div className="mobileMenu">
      <ul className="mobileMenu__items">
        <Link to="/">
          <li className="mobileMenu__item">Home</li>
        </Link>{' '}
        <Link to="/about">
          {' '}
          <li className="mobileMenu__item">About-us</li>
        </Link>
        <Link to="/services">
          {' '}
          <li className="mobileMenu__item">Services</li>
        </Link>
        <Link to="/portfolio">
          {' '}
          <li className="mobileMenu__item">Portfolio</li>
        </Link>
        <Link to="/contact">
          <li className="mobileMenu__item">Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default MobileMenu
