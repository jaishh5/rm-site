import React from 'react';
import Header from './header.js';
import About from './aboutComponent.js';
import Contact from './contactComponent'
import Footer from './footer.js';

function Home(){
	return (
		<div>
			<div className="header" id="header">
				<Header />
			</div>
				<About />
			
				<Contact />
		
			<Footer />
		</div>
	)
}

export default Home;