import './Service.css'
import React from 'react'

const Service = ({ sEmblem, sTitle, sDescription }) => {
	return (
		<div className='service'>
			<img src={sEmblem} alt={sTitle} />
			<h2>{sTitle}</h2>
			<p>{sDescription}</p>
		</div>
	)
}

export default Service
