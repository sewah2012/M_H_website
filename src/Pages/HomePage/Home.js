import './Home.css'
import React from 'react'
import NavBar from '../../Compononents/NavBar/NavBar'
import { Button } from '@material-ui/core'
import Service from '../../Compononents/services/Service'

const Home = () => {
	const styles = {
		backgroundImage: 'url("assets/images/banner1.jpg")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		bacgroundColor: 'blue',
		width: '100%',
		height: '600px',


	}

	return (
		<div className='home'>
			<NavBar />
			<section style={styles} className='home__topBanner' >
				<div className='home__topBanner-text'>
					<h1>Welcome to M and H Global Services </h1>
					<Button 
						variant='contained' 
						color='secondary' 
						// style={{width: '10rem', height: '5rem'}}
					>
						Discover-us
					
					</Button>
				</div>
			</section>

			<section className='home__about'>
				<img src='assets/images/businessAnalysis.svg' alt='abt_home' />
				<div className='home__about-content'>
					<h2>About - us </h2>
					<p>Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit. 
						Nulla congue nunc ut nulla placerat 
						sollicitudin. Proin feugiat fermentum 
						ipsum, eget congue lacus viverra ut. Donec venenatis mauris in ultricies rutrum. 
						Nullam blandit ut magna sit amet ornare. 
						Integer ullamcorper euismod lacinia. Curabitur id tempus elit. Orci varius natoque penatibus 
						et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et tellus 
						et est convallis malesuada ut vel magna.
					</p>
					<Button variant='outlined' color='primary'> see more ...</Button>
				</div>
			</section>

			<section className='home__services'>
				<div className='home__services-content'>
				<h2>A votre service</h2>
				<p>
			
						Integer ullamcorper euismod lacinia. Curabitur id tempus elit. Orci varius natoque penatibus 
						et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et tellus 
				</p>
				</div>
				<div className='home__services-items'>
					<Service
						sDescription='Integer ullamcorper euismod lacinia. Curabitur id tempus elit. Orci varius natoque penatibus 
						et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et tellus ' 
						sTitle='Creation de Site Web'
						sEmblem='assets/images/services.svg'
						
						
					/>
					<Service
						sDescription='Integer ullamcorper euismod lacinia. Curabitur id tempus elit. Orci varius natoque penatibus 
						et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et tellus ' 
						sTitle='Creation de Site Web'
						sEmblem='assets/images/services.svg'
						
						
					/>
					<Service
						sDescription='Integer ullamcorper euismod lacinia. Curabitur id tempus elit. Orci varius natoque penatibus 
						et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et tellus ' 
						sTitle='Creation de Site Web'
						sEmblem='assets/images/services.svg'
						
						
					/>
				</div>
				

			</section>
			<h1>nos références clients </h1>
			<h1>contact us section ...  </h1>
			<h1>footer </h1>
			
		</div>
	)
}

export default Home
