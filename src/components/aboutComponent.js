import React from 'react';
import { Container } from 'reactstrap';

function About(){
	return(
		<div style={{ paddingTop: "50px", paddingBottom: '50px' , backgroundColor: '#f5f5f5' }}>
			<Container>
        <div className="wed-card is-visible" style={{paddingTop: "50px", paddingBottom: "45px", backgroundColor: 'white'}}>
          <div className="show-on-scroll">
            <h3 style={{fontSize: "40px"}}>ABOUT US</h3>
            <div className="card-line ml-auto mr-auto"></div>
            <p style={{fontSize: "18px"}}>
							RoboManipal is the official robotics team of MIT, Manipal. Initiated back in 2009 with the sole objective of
							participating in Asia’s largest robotics competition -ABU Robocon, we have since diversified into various
							other competitions and research avenues. We are a group of robotics enthusiasts from diverse engineering
							backgrounds who constantly strive to solve relevant, real world problems using artificial intelligence and
							robotic mechanisms. Our team comprises of the Coding, Electronics, Mechanical and Management
							subsystems which work in tandem to build working, usable bots.
            </p>
						<p style={{fontSize: "18px"}}>
							Apart from building robots we also spread knowledge of robotics and its diverse applications in the form of
            	workshops and intra-college competitions. One of the flagship crowd-drawing events of MIT’s technical fest
            	TechTatva, ‘RoboWars’ is also organized by our team.
            </p>
          </div>
        </div>
			</Container>
		</div>
	)
}

export default About;