import './PortfolioPage.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import Banner from '../../Compononents/Banner/Banner'
import Footer from '../../Compononents/Footer/Footer'
import TestimonialsList from '../../Compononents/Testimonials/TestimonialsList'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

// animation
import Slide from 'react-reveal/Slide'
import { data } from '../../DataSources/data'

const PortfolioPage = () => {
  return (
    <div>
      <NavBar />
      <Banner title="Our Portfolio" imaage="assets/images/banner1.jpg" />
      <section id="portfolioSection">
        <h2>Notre Collection des Projects </h2>
        <hr />
        <div className="porfolio__items">
          {data.portforlio.map((project, index) => {
            if (project.projectId % 2 === 0) {
              return (
                <div className="portfolio__item">
                  <img src={project.projectImage} alt={project.projectTitle} />
                  <Slide right>
                    <div className="portfolio__item-content">
                      <h2>{project.projectTitle}</h2>
                      <p>{project.projectDescription}</p>
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
                <div className="portfolio__item left">
                  <img src={project.projectImage} alt={project.projectTitle} />
                  <Slide left>
                    <div className="portfolio__item-content">
                      <h2>{project.projectTitle}</h2>
                      <p>{project.projectDescription}</p>
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
      <TestimonialsList />
      <Footer />
    </div>
  )
}

export default PortfolioPage
