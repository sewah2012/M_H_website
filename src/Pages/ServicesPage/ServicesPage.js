import './ServicesPage.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import Banner from '../../Compononents/Banner/Banner'
import Footer from '../../Compononents/Footer/Footer'
import { data } from '../../DataSources/data'
import Service from '../../Compononents/services/Service'
import ContactSection from '../../Compononents/ContactSection/ContactSection'
import PricingList from '../../Compononents/Pricing/PricingList'

// animations

const ServicesPage = () => {
  return (
    <div>
      <NavBar />
      <Banner title="Notre services " image="assets/images/banner1.jpg" />
      <section id="servicePage">
        <h2>Notre services </h2>
        <hr />
        <div className="services__list">
          {data.services.list_services.map((service, index) => (
            <Service
              key={index}
              sTitle={service.sTitle}
              sDescription={service.sDescription}
              sEmblem={service.sEmblem}
            />
          ))}
        </div>
      </section>
      <PricingList />
      <section>
        <ContactSection />
      </section>
      <Footer />
    </div>
  )
}

export default ServicesPage
