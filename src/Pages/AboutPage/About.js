import './About.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import Banner from '../../Compononents/Banner/Banner'
import Footer from '../../Compononents/Footer/Footer'

import { data } from '../../DataSources/data'
import { LinkedIn } from '@material-ui/icons'

// animation
import Slide from 'react-reveal/Slide'

const About = () => {
  return (
    <div>
      <NavBar />
      <Banner title="About us" image="assets/images/banner1.jpg" />
      <div className="about">
        <div className="about__content">
          <h2>Apropos de Notre Societe </h2>
          <p>{data.about.about_company}</p>
        </div>

        <div>
          <h2> notre equipe</h2>

          <Slide right cascade>
            <div className="about__staff">
              <div className="about__equipe">
                <img src="assets/images/staff.png" alt="equip" />
                <h2>Mr. Hanza </h2>
                <p>President / CEO</p>
                <a href="#" target="_blank">
                  {' '}
                  <LinkedIn fontSize="large" style={{ color: 'blue' }} />
                </a>
              </div>

              <div className="about__equipe">
                <img src="assets/images/staff.png" alt="equip" />
                <h2>Mr. Hanza </h2>
                <p>President / CEO</p>
                <a href="#" target="_blank">
                  {' '}
                  <LinkedIn fontSize="large" style={{ color: 'blue' }} />
                </a>
              </div>

              <div className="about__equipe">
                <img src="assets/images/staff.png" alt="equip" />
                <h2>Mr. Hanza </h2>
                <p>President / CEO</p>
                <a href="#" target="_blank">
                  {' '}
                  <LinkedIn fontSize="large" style={{ color: 'blue' }} />
                </a>
              </div>

              <div className="about__equipe">
                <img src="assets/images/staff.png" alt="equip" />
                <h2>Mr. Hanza </h2>
                <p>President / CEO</p>
                <a href="#" target="_blank">
                  {' '}
                  <LinkedIn fontSize="large" style={{ color: 'blue' }} />
                </a>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
