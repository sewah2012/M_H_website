import './PageNotFound.css'
import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Compononents/Footer/Footer'
import NavBar from '../../Compononents/NavBar/NavBar'

const PageNotFound = () => {
  return (
    <div>
      <NavBar />
      <section id="pageNotFound">
        <img src="assets/images/page_not_found.svg" alt="404" />
        <h2>Sorry this page does not exist</h2>
        <IconButton>
          <Button color="primary" variant="contained">
            <Link to="/"> Go to Home</Link>
          </Button>
        </IconButton>
      </section>
      <Footer />
    </div>
  )
}

export default PageNotFound
