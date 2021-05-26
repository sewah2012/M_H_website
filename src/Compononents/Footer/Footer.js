import './Footer.css'
import React from 'react'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
//icons
const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="footer__col1">
          <Link to="/">
            <img
              className="footer__col1-lg"
              src="assets/images/logo.jpg"
              alt="logo"
            />
          </Link>
          <p>Rendez vous chez nous: </p>
          <LocationOnIcon /> <p>Rabat, Medina - Morocco </p> <PhoneIcon />{' '}
          <a href="tel:+212632952071">+212 632 952 071</a> <br />
          <br />
          <EmailIcon />
          <a href="mailto:sewah2012@gmail.com">sewah2012@gmail.com</a>
        </div>

        <div className="footer__col2">
          <h2>Quick Links</h2>
          <ul className="quickMenu-items">
            <li className="quickMenu-item">
              <Link to="/"> Home</Link>
            </li>
            <li className="quickMenu-item">
              <Link to="/about"> About-us</Link>
            </li>
            <li className="quickMenu-item">
              <Link to="/services"> Services</Link>
            </li>
            <li className="quickMenu-item">
              <Link to="/portfolio"> Portfolio</Link>
            </li>
            <li className="quickMenu-item">
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col3">
          <IconButton style={{ color: '#0061a8' }}>
            <Facebook style={{ width: 60, height: 60 }} />
          </IconButton>

          <IconButton style={{ color: '#0061a8' }}>
            <Twitter style={{ width: 60, height: 60 }} />
          </IconButton>

          <IconButton style={{ color: '#0061a8' }}>
            <Instagram style={{ width: 60, height: 60 }} />
          </IconButton>
        </div>
      </section>
      <section id="copywrite">
        copyright {new Date().getFullYear()} @{' '}
        <a href="/">M and H Global Services</a>
      </section>
    </>
  )
}

export default Footer
