import './PricingList.css'
import React from 'react'
import Pricing from './Pricing'
import { data } from '../../DataSources/data'

const PricingList = () => {
  return (
    <section id="pricing">
      <h2>PLUSIEUR OPTION DE TARIFICATION </h2>
      <p>
        Pellentesque bibendum enim eu vehicula cursus. Nulla tellus felis,
        molestie ut porttitor vitae, ultricies quis odio. Nulla nec turpis mi.
      </p>
      <div className="pricing__list">
        {data.pricing.map((price, index) => (
          <Pricing
            key={index}
            label={price.lable}
            price={price.price}
            availableFeatures={price.availableFeatures}
            notAvailableFeatures={price.notAvailableFeatures}
          />
        ))}
      </div>
    </section>
  )
}

export default PricingList
