import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='navBar'>
			<div className='navBar__brand'>
				<img src='assets/images/logo.jpg' alt='brand' />
			</div>

			<div className='navBar__menu'>
				<ul className='navBar__menu-items'>
					<li className='navBar__menu-item'><Link to='/'> Home</Link></li>
					<li className='navBar__menu-item'><Link to='/'> About-us</Link></li>
					<li className='navBar__menu-item'><Link to='/'> Services</Link></li>
					<li className='navBar__menu-item'><Link to='/'> Portfolio</Link></li>
					<li className='navBar__menu-item'><Link to='/'> Contact</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar
