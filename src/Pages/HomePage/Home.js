import './Home.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import { Button } from '@material-ui/core'
import Service from '../../Compononents/services/Service'
import ContactForm from '../../Compononents/ContactForm/ContactForm'

// icons
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Footer from '../../Compononents/Footer/Footer'

import { data } from '../../DataSources/data'
import { truncate } from '../../utility/util'
const Home = () => {
  const styles = {
    backgroundImage: 'url("assets/images/banner1.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    bacgroundColor: 'blue',
    // width: '100v',
    height: '600px',
  }

  return (
    <div className="home">
      <NavBar />
      <section style={styles} className="home__topBanner">
        <div className="home__topBanner-text">
          <h1>Welcome to M and H Global Services </h1>
          <Button
            variant="contained"
            color="secondary"
            // style={{width: '10rem', height: '5rem'}}
          >
            Discover-us
          </Button>
        </div>
      </section>

      <section className="home__about">
        <img src="assets/images/businessAnalysis.svg" alt="abt_home" />
        <div className="home__about-content">
          <h2>About - us </h2>
          <p>{truncate(data.about.about_company, 10)}</p>
          <Button variant="outlined" color="primary">
            {' '}
            see more ...
          </Button>
        </div>
      </section>

      <section className="home__services">
        <div className="home__services-content">
          <h2>A votre service</h2>
          <p>{data.services.intro}</p>
        </div>
        <div className="home__services-items">
          {data.services.list_services.map((service, index) => (
            <Service
              key={index}
              sDescription={service.sDescription}
              sTitle={service.sTitle}
              sEmblem={service.sEmblem}
            />
          ))}
        </div>
      </section>

      <section className="home__clients">
        <h2>nos références clients</h2>
        <div className="home__clients-logos">
          <ul className="clients">
            {data.clientsRef.map((client, index) => (
              <li className="client" key={index}>
                <a href={client.website} target="_bank">
                  <img src={client.clientLogoUrl} alt={client.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="homeContact">
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
      </section>

      <Footer />
    </div>
  )
}

export default Home
