import './ContactPage.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import Footer from '../../Compononents/Footer/Footer'
import Banner from '../../Compononents/Banner/Banner'
import ContactSection from '../../Compononents/ContactSection/ContactSection'

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <Banner title="Contact - us " image="assets/images/banner1.jpg" />
      <section>
        {/* <h1>Contact us </h1> */}
        <ContactSection />
      </section>
      <Footer />
    </div>
  )
}

export default ContactPage
