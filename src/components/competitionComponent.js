import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

function Competition() {
  return (
		<div className="competition">
			<Header />
			<Row className="justify-content-center" style={{ paddingTop: '100px' }}>
				<h1>COMPETITIONS</h1>
			</Row>
			<Container style={{ paddingBottom: '40px' }}>
				<div className="col-12 col-md-8" style={{ margin: '0 auto' }}>
					<h2 style={{ paddingTop: '20px', textAlign: 'center' }}>ABOUT ABU ROBOCON</h2>
					<p>The ABU Asia-Pacific Robot Contest is a competition in which robots compete to complete a challenging task within a set period of time.This year Robocon had ‘ROBO RUGBY’ as the contest theme.The competition has two stages and our team successfully qualified Stage 1 which is a video submission round and was among top 100 teams all over India.</p>
					<ul>
						<li>Different achievements in the event will be listed here</li>
					</ul>
					<h2 style={{ textAlign: 'center' }}>ABOUT IICDC</h2>
					<p>IICDC (India Innovation Challenge Design Contest) is a national innovation contest wherein teams participate to create a new innovative product using TI components.The competition has three rounds - Quarterfinals, Semi-finals and the Finals.</p> 
					<ul>
						<li>Achievements in the Event.</li>
					</ul>
				</div>
		 	</Container>
			<Footer />
		</div>
	)
}

export default Competition;
