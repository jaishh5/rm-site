import React from 'react'
import { Container, Row } from 'reactstrap';
import Header from './header.js'
import Footer from './footer.js'

function Sponsor () {
  return (
    <div>
			<Container>
				<Header />
				<Row className="justify-content-center" style={{ paddingTop: '100px' }}>
					<h1>SPONSORS</h1>
				</Row>
			</Container>
			<Container className="sponsor" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
				<img src="assets/images/robokits.jpg" />
				<img src="assets/images/solidworks.png" />
    		<img src="assets/images/molex.png" />
   	 		<img src="assets/images/intel.png" />
				<img src="assets/images/souledstore.png" />
    		<img src="assets/images/oyo.png" />
    		<img src="assets/images/idea.png" />
    		<img src="assets/images/fracktal.png" />
				<img src="assets/images/credence.jpg" />
				<img src="assets/images/pcb.jpg" />
				<img src="assets/images/augment.png" />
				<img src="assets/images/strange.jpg" />
				<img src="assets/images/mg.png" />
				<img src="assets/images/kms.jpg" />
			</Container>
			<Footer />
    </div>
  )
}

export default Sponsor;