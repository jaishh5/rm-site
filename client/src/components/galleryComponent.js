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
							<img src="assets/images/gallery/1.jpg" />
						</div>
						<div id="box2" class="gridinner">
							<img src="assets/images/gallery/2.jpg" />
						</div>
						<div id="box3" class="gridinner">
							<img src="assets/images/gallery/3.jpg" />
						</div>
						<div id="box4" class="gridinner">
							<img src="assets/images/gallery/4.jpg" />
						</div>
						<div id="box5" class="gridinner">
							<img src="assets/images/gallery/5.jpeg" />
						</div>
						<div id="box6" class="gridinner">
							<img src="assets/images/gallery/6.jpg" />
						</div>
						<div id="box7" className="gridinner">
							<img src="assets/images/gallery/7.jpg" />
						</div>
						<div id="box8" class="gridinner">
							<img src="assets/images/gallery/8.jpg" />
						</div>
						<div id="box9" class="gridinner">
							<img src="assets/images/gallery/9.jpg" />
						</div>
						<div id="box10" class="gridinner">
							<img src="assets/images/gallery/10.jpeg" />
						</div>
					</div>
				</Row>
			</Container>
			<Footer />
		</div>
  )
}

export default Gallery
