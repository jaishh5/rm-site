import React from 'react';
import Header from './header.js';
import About from './aboutComponent.js';
import Test from './testComponent.js';
import Sponsor from './sponsorComponent'
import Contact from './contactComponent'
import Footer from './footer.js';

function Home(){
	return (
		<div>
			<div className="header" id="header">
				<Header />
				<div>
					<img src='assets/images/rm_logo.png' className="headerimg" alt="RM Logo" />
				</div>
			</div>
			<About />	
			<Sponsor />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home;