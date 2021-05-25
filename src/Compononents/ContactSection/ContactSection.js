import './ContactSection.css'
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import ContactForm from '../ContactForm/ContactForm'
import { data } from '../../DataSources/data'
const ContactSection = () => {
  return (
    <>
      <div className="home__contact-info">
        <h2> Contact Information </h2>
        <p>Rendez vous chez nous: </p>
        <LocationOnIcon />
        <p>{data.contact.address} </p> <PhoneIcon />{' '}
        <a href={`tel:${data.contact.telephone}`}>{data.contact.telephone}</a>{' '}
        <EmailIcon />{' '}
        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
      </div>
      <div className="home__contact">
        <div className="home__contact-form">
          <ContactForm />
        </div>

        <div className="home__contact-map">MAP</div>
      </div>
    </>
  )
}

export default ContactSection
