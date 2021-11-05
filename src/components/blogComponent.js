import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'
import Aos from "aos"
import "aos/dist/aos.css"

function Blogs() {

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

  return (
    <div>
      <Header />
			<div className="pagebg">
				<Row className="justify-content-center pagehead">
					{/* <span></span>   */}
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   BLOGS   </h3>
					{/* <span></span> */}
				</Row>
    	</div>
			<Container style={{ paddingBottom: '50px', paddingTop: '50px' }}>
				<Row style={{ paddingTop: '30px' }}>
					<div data-aos="fade-right" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/blogs/sample.jfif" alt="Blog 1" />
							<a href="/blog1"><div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>BLOG 1</h6><br />
									<p>Click for more info!</p>
								</div>
							</div></a>
						</div>
						<h5 style={{ paddingTop: '20px' }}>BLOG 1</h5>
					</div>
					<div data-aos="fade-down" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/blogs/sample.jfif" alt="Blog 2" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>BLOG 2</h6><br />
									<p>Click for more info!</p>
								</div>
							</div>
						</div>
						<h5 style={{ paddingTop: '20px' }}>BLOG 2</h5>
					</div>
					<div data-aos="fade-left" className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/blogs/sample.jfif" alt="Blog 3" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>BLOG 3</h6><br />
									<p>Click for more info!</p>
								</div>
							</div>
						</div>
						<h5 style={{ paddingTop: '20px' }}>BLOG 3</h5>
					</div>
				</Row>
				<Row style={{ paddingTop: '50px' }}>
					<div data-aos="fade-right" className="col-12 col-md-4 project mx-auto">
						<div className="inner mx-auto">
							<img src="assets/images/blogs/sample.jfif" alt="Blog 4" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>BLOG 4</h6><br />
									<p>Click for more info!</p>
								</div>
							</div>
						</div>
						<h5 style={{ paddingTop: '20px' }}>BLOG 4</h5>
					</div>				
				</Row>
				{/* <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat-Bold', paddingTop: '70px' }}>UPCOMING</h2>
				<Row style={{ paddingTop: '50px' }}>
					<div data-aos="fade-down" className="col-12 col-md-4 project mx-auto">
						<div className="inner mx-auto">
							<img src="assets/images/sample.jfif" alt="Blog 1" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>Blog 1</h6>
									<p>Click for more info!</p>
								</div>
							</div>
						</div>
						<h5>Blog 1</h5>
					</div>
				</Row> */}
			</Container>
			<Footer />
		</div>
  )
}

export default Blogs
