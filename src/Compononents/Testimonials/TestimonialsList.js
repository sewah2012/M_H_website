import './TestimonialsList.css'
import React from 'react'
import Testimonial from './Testimonial'
import { data } from '../../DataSources/data'

const TestimonialsList = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials__list">
        {data.testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.testimonial}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsList
