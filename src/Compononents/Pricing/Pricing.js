import './Pricing.css'
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Pricing = ({ label, price, availableFeatures, notAvailableFeatures }) => {
  return (
    <div className="pricing">
      <div className="pricing__head">
        <h1>{label}</h1>
        <h4>site dynamique</h4>
      </div>

      <div className="pricing__price">
        <h4>Apartir de </h4>
        <h1>{price} DH</h1>
        <h4>TTC</h4>
      </div>

      <div className="pricing__features">
        <ul className="features-available">
          {availableFeatures.map((feature, index) => (
            <li key={index}> {feature} </li>
          ))}
        </ul>
        {notAvailableFeatures && (
          <ul className="Not_features-available">
            {notAvailableFeatures.map((feature, index) => (
              <li key={index}> {feature} </li>
            ))}
          </ul>
        )}
      </div>
      <Button variant="contained" fullwidth color="secondary">
        {' '}
        <Link to="/contact"> Demande</Link>{' '}
      </Button>
    </div>
  )
}

export default Pricing
