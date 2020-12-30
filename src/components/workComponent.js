import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

function Work() {
  return (
    <div>
			<Container>
				<Header />
				<Row className="justify-content-center" style={{ paddingTop: '100px' }}>
					<h1>PROJECTS</h1>
				</Row>
			</Container>
			<Container>
				<Row className="work">
					<div class="col-md-4 col-sm-12">
						<img src="assets/images/rm.jpg" />
					</div>
					<div class="col-md-8 col-sm-12 workinfo">
						<h5>Electromyography</h5>
						<p>One of our members, Sidhartha Dey, recently completed a project on the concept of Electromyography(EMG) i.e. measurement of myoelectric signals involved in muscle activation and contraction. With this, one can measure the response of a muscle, say, for example, the biceps muscle, to a specific stimulus or an action, such as picking up a book. The basis behind EMG lies in the fact that the electrical signals sent to the muscle can be picked up on the surface of the skin, using electrodes, at the desired muscle location. This allows one to compare the electrical signals being sent to the muscle with the physical response of the muscle itself.</p>
					</div>
				</Row>
				<Row className="work">
					<div class="col-md-4 col-sm-12">
						<img src="assets/images/rm.jpg" />
					</div>
					<div class="col-md-8 col-sm-12 workinfo">
						<h5>Electromyography</h5>
						<p>One of our members, Sidhartha Dey, recently completed a project on the concept of Electromyography(EMG) i.e. measurement of myoelectric signals involved in muscle activation and contraction. With this, one can measure the response of a muscle, say, for example, the biceps muscle, to a specific stimulus or an action, such as picking up a book. The basis behind EMG lies in the fact that the electrical signals sent to the muscle can be picked up on the surface of the skin, using electrodes, at the desired muscle location. This allows one to compare the electrical signals being sent to the muscle with the physical response of the muscle itself.</p>
					</div>
				</Row>
				<Row className="justify-content-center" style={{ paddingTop: '50px' }}>
					<h1>EVENTS</h1>
				</Row>
				<Row className="work" style={{ paddingBottom: '40px' }}>
					<div class="col-md-4 col-12">
        		<img src="assets/images/rm.jpg" />
      		</div>
      		<div class="col-md-8 col-12 workinfo">
        		<p>We hold regular workshops of basic robotics to help and teach robotics enthusiasts. We intend to help students who are interested in robotics and related fields but lack the required knowledge to build the robot. Our workshop is open to anybody who needs our assistance and our team members are always willing to help. Nothing draws a crowd in a technical festival like the sound of metal crashing against metal. "Robowars" is one of the most popular events in TechTatva. Robowars is one the featured event in TechTatva and we have participants from all over the south zone. Members of RoboManipal participate in different events during our techfest too. Robotrek is one such event, which includes events like "mesh", "vertigo" and "Robo-Pacman" in which our team members participated and won cash prizes.</p>
      		</div>
				</Row>
			</Container>
			<Footer />
    </div>
  )
}

export default Work;
