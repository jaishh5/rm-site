import React from 'react';
import Header from './header.js';
import Footer from './footer.js';

function Home(){
	return (
		<div>
			<div className="header">
				<Header />
			</div>
			<Footer />
		</div>
	)
}

export default Home;