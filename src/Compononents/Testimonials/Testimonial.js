import './Testimonial.css'
import React from 'react'

const Testimonial = ({ quote, author, role, company }) => {
  return (
    <div className="testimonial">
      <p>
        <q>{quote}</q>
      </p>
      <div className="testimonial__author">
        <h4>{author}</h4>
        <p>
          <i>
            {role}, {company}
          </i>
        </p>
      </div>
    </div>
  )
}

export default Testimonial
