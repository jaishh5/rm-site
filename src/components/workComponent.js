import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

function Work() {
  return (
    <div>
			<Header />
			<div className="workhead">
				<Row className="justify-content-center pagehead">
					<span></span>  
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   OUR WORK   </h3>
					<span></span>
				</Row>
			</div>
			<Container style={{ paddingBottom: '50px', paddingTop: '50px' }}>
				<Row style={{ paddingTop: '30px' }}>
					<div className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/electromyography.jpg" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>ELECTROMYOGRAPHY</h6>
									<p>Electromyography(EMG) is the measurement of myoelectric signals involved in muscle activation and contraction. The basis 
										behind EMG lies in the fact that the electrical signals sent to the muscle can be picked up on the surface of the skin, 
										using electrodes, at the desired muscle location. This allows one to compare the electrical signals being sent to the 
										muscle with the physical response of the muscle itself.
									</p>
								</div>
							</div>
						</div>
						<h5>ELECTROMYOGRAPHY</h5>
					</div>
					<div className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/gurney.jpg" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>POWER ASSISTED GURNEY</h6>
									<p>A power assisted drive system, developed by Vignesh Iyer and Sandesh Manik, for existing gurneys used in hospitals which 
										permits the movement of a gurney by a single person as opposed to the existing ones which require three or more people, 
										with the motion being truly holonomic and the operation not requiring any additional knowledge. This system allows any 
										person to operate a gurney without any effort or hassles, especially during emergency situations.
									</p>
								</div>
							</div>
						</div>
						<h5>POWER ASSISTED GURNEY</h5>
					</div>
					<div className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/homeautomation.jpg" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>SMART HOME AUTOMATION</h6>
									<p>Using the concept of Internet of Things(IoT), this project allows the owner to monitor, access, and manage the electronic 
										devices in the house. Home automation demonstrates both security and ease granted by the concept. A lot of sensors are involved 
										here to monitor different devices/objects in the house which can all be done with a click of a button on a website or a mobile 
										app to enable the user the extensive control of his home.
									</p>
								</div>
							</div>
						</div>
						<h5>SMART HOME AUTOMATION</h5>
					</div>
				</Row>
				<Row style={{ paddingTop: '50px' }}>
					<div className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/waterfilter.jpg" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>ATOMIZED CLEANING WATER DISPENSER</h6>
									<p>The use of conventional taps since the past few centuries has led to inefficient use of water when it comes to cleaning since 
										most of the water goes down the drain after bouncing off a surface. A replacement for existing taps having atomizers in parallel 
										and water pressurized by a localized compressor. It gives the same cleaning efficiency of tap water in the same time span and 
										saving about 90% of water while doing so. This not only saves a lot of water, but also saves electricity that was being used to
										 pump the water.
									</p>
								</div>
							</div>
						</div>
						<h5>ATOMIZED CLEANING WATER DISPENSER</h5>
					</div>
					<div className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/choppercircuit.png" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>CHOPPER CIRCUIT</h6>
									<p>This project was initially started as a means of preventing undue damage to battery due to circuit failure. For the 2017 season 
										of Robocon, this circuit would be used to measure current input to motor drivers for the launching mechanism motors. This circuit 
										failed due to both heavy reverse spike voltages and circuit problems from bad quality of pcb etching. Shortage of time prevented 
										any further changes from being made and circuit was not used in the final bot.
									</p>
								</div>
							</div>
						</div>
						<h5>CHOPPER CIRCUIT</h5>
					</div>
					<div className="col-12 col-md-4 project">
						<div className="inner mx-auto">
							<img src="assets/images/smartbot.png" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>SMART BOT</h6>
									<p>The idea is of a bot that can walk on two feet (using pneumatic actuated mechanisms), map an environment in 3D (using kinect or a LiDAR) 
										and interact with users. The piston can expand and contract, using a 4 bar mechanism, with this kind of actuator, one can easily 
										attain joint motion as shown in the first diagram. If used with proper control theories, then it’ll make a very stable base for 
										motion. Software VReP will be used for simulation and inverse kinematics. A genetic algorithm will be trained to attain walking 
										motion.
									</p>
								</div>
							</div>
						</div>
						<h5>SMART BOT</h5>
					</div>
				</Row>
				<h2 style={{ textAlign: 'center', fontFamily: 'Montserrat-Bold', paddingTop: '70px' }}>FUTURE PROJECTS</h2>
				<Row style={{ paddingTop: '50px' }}>
					<div className="col-12 col-md-4 project mx-auto">
						<div className="inner mx-auto">
							<img src="assets/images/smartbot.png" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>HUMANOID ROBOT (BIPED)</h6>
									<p>The objective of this project is to design and create a biped robot that serves as a platform for the development of bipedal 
										locomotion. The goal of this project is to achieve a dynamically stable gait for walking motion of the biped robot.
									</p>
								</div>
							</div>
						</div>
						<h5>HUMANOID ROBOT (BIPED)</h5>
						</div>
					<div className="col-12 col-md-4 project mx-auto">
						<div className="inner mx-auto">
							<img src="assets/images/smartbot.png" />
							<div className="overlay">
								<div className="workinfo">
									<h6 style={{ paddingTop: '20px', fontFamily: 'Montserrat-Bold' }}>QUADRUPED</h6>
									<p>Quadruped robots come with a vast array of difficulties, including making lightweight and high torque actuators, strong 
										structure and and even greater coding challenge, with requirements such as trajectory planning, gait generation, environment 
										sensing and navigation.
									</p>
								</div>
							</div>
						</div>
						<h5>QUADRUPED</h5>
					</div>
				</Row>
			</Container>
			<Footer />
    </div>
  )
}

export default Work;
