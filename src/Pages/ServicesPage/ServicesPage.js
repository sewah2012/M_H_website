import './ServicesPage.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import Banner from '../../Compononents/Banner/Banner'
import Footer from '../../Compononents/Footer/Footer'
import { Link } from 'react-router-dom'
import { data } from '../../DataSources/data'
import { Button } from '@material-ui/core'

// animations
import Slide from 'react-reveal/Slide'

const ServicesPage = () => {
  return (
    <div>
      <NavBar />
      <Banner title="Notre services " image="assets/images/banner1.jpg" />
      <section id="servicePage">
        <h2>Notre services </h2>
        <hr />
        <div className="service__items">
          {data.services.list_services.map((service, index) => {
            if (service.serviceId % 2 === 0) {
              return (
                <div className="service__item">
                  <img src={service.sEmblem} alt={service.sTitle} />
                  <Slide right>
                    <div className="service__item-content">
                      <h2>{service.sTitle}</h2>
                      <p>{service.sDescription}</p>
                      <br />
                      <br />
                      <Link to="/contact">
                        <Button variant="contained" color="secondary" fullWidth>
                          Contact us now
                        </Button>
                      </Link>
                    </div>
                  </Slide>
                </div>
              )
            } else {
              return (
                <div className="service__item left">
                  <img src={service.sEmblem} alt={service.sTitle} />
                  <Slide left>
                    <div className="service__item-content">
                      <h2>{service.sTitle}</h2>
                      <p>{service.sDescription}</p>
                      <br />
                      <Link to="/contact">
                        <Button variant="contained" color="primary" fullWidth>
                          Contact us now
                        </Button>
                      </Link>
                    </div>
                  </Slide>
                </div>
              )
            }
          })}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ServicesPage
