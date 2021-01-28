import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

const Gallery = () => {
  return (
    <div id="gallery">
      <Header />
			<div className="pagebg">
				<Row className="justify-content-center pagehead">
					<span></span>  
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   GALLERY   </h3>
					<span></span>
				</Row>
    	</div>
			<Container>
				<Row>
					<div className="wrapper">
						<div id="box1" className="gridinner">
							<img src="assets/images/gallery/1.jpg" alt="Bot1" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ fontFamily: 'Montserrat-Bold' }}>HUMANOID ROBOT (BIPED)</h6>
								</div>
							</div>
						</div>
						<div id="box2" className="gridinner">
							<img src="assets/images/gallery/2.jpg" alt="Team1" />
						</div>
						<div id="box3" className="gridinner">
							<img src="assets/images/gallery/3.jpg" alt="Bot2" />
						</div>
						<div id="box4" className="gridinner">
							<img src="assets/images/gallery/4.jpg" alt="circuit" />
						</div>
						<div id="box5" className="gridinner">
							<img src="assets/images/gallery/5.jpeg" alt="Robowars" />
						</div>
						<div id="box6" className="gridinner">
							<img src="assets/images/gallery/6.jpg" alt="Team2" />
						</div>
						<div id="box7" className="gridinner">
							<img src="assets/images/gallery/7.jpg" alt="Bot3" />
						</div>
						<div id="box8" className="gridinner">
							<img src="assets/images/gallery/8.jpg" alt="Bot4" />
						</div>
						<div id="box9" className="gridinner">
							<img src="assets/images/gallery/9.jpg" alt="Team3" />
						</div>
						<div id="box10" className="gridinner">
							<img src="assets/images/gallery/10.jpeg" alt="Bot5" />
						</div>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
  )
}

export default Gallery
