import './Home.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import { Button } from '@material-ui/core'
import Service from '../../Compononents/services/Service'

// animation
import Zoom from 'react-reveal/Zoom'
import Jump from 'react-reveal/Jump'
// icons

import Footer from '../../Compononents/Footer/Footer'

import { data } from '../../DataSources/data'
import { truncate } from '../../utility/util'
import { Link } from 'react-router-dom'
import ContactSection from '../../Compononents/ContactSection/ContactSection'
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
        <Jump cascade>
          <div className="home__about-content">
            <h2>About - us </h2>

            <p>{truncate(data.about.about_company, 10)}</p>

            <Button variant="outlined" color="primary">
              {' '}
              <Link to="/about"> see more ...</Link>
            </Button>
          </div>
        </Jump>
      </section>

      <section className="home__services">
        <div className="home__services-content">
          <h2>A votre service</h2>
          <p>{data.services.intro}</p>
        </div>

        <div className="home__services-items">
          {data.services.list_services.slice(0, 4).map((service, index) => (
            <Zoom>
              <Service
                key={index}
                sDescription={service.sDescription}
                sTitle={service.sTitle}
                sEmblem={service.sEmblem}
              />{' '}
            </Zoom>
          ))}
        </div>
        <Button variant="contained" color="primary" fontSize="large">
          <Link to="/services">Voir Plus de notres services </Link>
        </Button>
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
        <ContactSection />
      </section>

      <Footer />
    </div>
  )
}

export default Home
