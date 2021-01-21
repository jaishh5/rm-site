import React from 'react'
import { Container, Row } from 'reactstrap';

const About = () => {
  return (
    <div className="about">
			<Container>
				<div className="col-xl-4">
					<img className="aboutimg" src="./assets/images/about1.jpg" style={{ float: 'left', height: '80vh' }}/>	
				</div>
				<div className=" col-12 col-xl-6" style={{ float: 'right', textAlign: 'center' }}>
					<Row className=" justify-content-center abouthead" style={{ paddingTop: '50px' }}>
						<span></span>  
						<h3 style={{color: 'black', fontFamily: 'Montserrat-Bold' }}>   ABOUT US   </h3>
						<span></span>
					</Row>
					<p style={{ fontFamily: 'Montserrat' }}>
						Team RoboManipal is the official robotics a student project of Manipal Institute of Technology.
						The team is embraced by sedulous members who constantly aim to achieve innovation through robotic technology to present
						themselves at various competitions. We are a group of coding, mechanical, electronics, advanced robotic research, 
						and management aficionados who work unitedly for what we “dream, build, and achieve.”
					</p>
					<p style={{ fontFamily: 'Montserrat' }}>
						We also drive towards Research and Development for the betterment of society. The team has been in the progress of 
						greater triumph since 2009. The legacy of 11 years to have won laurels at many levels is a testament to our enthusiasm.  
						We participate in prestigious competitions like ABU ROBOCON – Asia’s biggest robotic competition. We are proud to mark 
						ourselves in the competition over the years. Robowars- the most alluring event of Techtatva is a constituent of RoboManipal.
					</p>
					<Row className=" justify-content-center visionhead" style={{ paddingTop: '30px', alignItems: 'center' }}>
						<span></span>  
						<h3 style={{color: 'black', fontFamily: 'Montserrat-Bold' }}>   VISION AND MISSION   </h3>
						<span></span>
					</Row>
					<p style={{ paddingBottom: '30px', fontFamily: 'Montserrat' }}>
						Our innovation starts with a DREAM to elucidate problems as we BUILD solutions to ACHIEVE the limitless.
					</p>
				</div>
			</Container>
		</div>
  )
}

export default About;
