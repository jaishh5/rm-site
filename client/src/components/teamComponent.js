import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

function Team() {
  return (
    <div>
      <Header />
			<div className="pagebg">
				<Row className="justify-content-center pagehead">
					<span></span>  
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   OUR TEAM   </h3>
					<span></span>
				</Row>
			</div>
			<Row className="container" style={{ textAlign: 'center', margin: '0 auto', paddingBottom: '30px', paddingTop: '15px', fontFamily: 'Montserrat' }}>
				<div className="domain mx-auto">
					<h5>Mechanical</h5>
					<p><i>"No TECH without <strong>MECH</strong>."</i></p>
					<p>
						Mechanical work comprises of designing and manufacturing of the robot. Our team works on 3D modeling, actuator design, 
						real-time constraint simulation, and robust design for robots' efficient functioning. Different CAD models are developed 
						for other mechanisms and experiments, including real-time testing, simulation, and analysis.
					</p>
				</div>
				<div className="domain mx-auto">
					<h5>Electronics</h5>
					<p><i>
						"You can involve yourself in electronics, computers, puzzles... there's a lot of creativity and brain working. 
						There's a lot to model trains that people don't realize."
					</i></p>
					<p>The electronics subsystem is the central system to function the robot. We work on rapid PCB prototyping to interfacing 
						a wide range of sensors to DAQ. From choosing the right components to design specificized pieces, we specialize in all. 
						To exclude off-the-shelf electronics to make the bot specific, the study is carried out to develop, simulate and validate 
						circuits.
					</p>
				</div>
				<div className="domain mx-auto">
					<h5>Coding</h5>
					<p><i>"Everybody should learn to program a computer because it teaches you how to think."</i></p>
					<p>Programming is an essential part when it comes to handling robots. Our coding subsystem links the electronics and mechanical 
						work in coordination, from programming microcontroller microcontrollers and processors, interfacing electronics and mechanics, 
						neural networks, and deep learning to computer vision and sensing. They work on the design and semi/complete automation of 
						processes for reliable control systems.
					</p>
					</div>
					<div className="domain mx-auto">
						<h5>Advanced Robotics Research</h5>
						<p><i>"There is an endless number of things to discover about robotics. A lot of it is just too fantastic for people to believe."</i></p>
						<p>Advanced Robotics Research is the novel subsystem of our student project. The subsystem deals with conceptualizations of 
							robotics with other advanced technologies. We work on the research and development of this vast art of building and working robots. 
							ARR is the new way to unveil the skillset of our team and challenge the minds of innovation.
						</p>
					</div>
					<div className="domain mx-auto">
						<h5>Management</h5>
						<p><i>"<strong>Management</strong> is, above all, a practice where art, science, and craft meet." </i></p>
						<p>Management subsystem deals with finances and sponsorship, advertisement, and graphics. Our team works for the competent functioning 
							of the whole student project maintaining harmony amongst all the subsystems. Public relations and human resources are also a part of 
							our responsibilities. Operations, business management, strategic planning, and web/app development are our specializations.
						</p>
					</div>
				</Row>
			<div>
			<Container>			
				<div style={{ textAlign: 'center', paddingTop: '50px' }}>
					<h2 style={{ fontFamily: 'Montserrat-Bold' }}>Board Members</h2>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/kaustubh.jpg" alt="Kaustubh" />
							<h5>Kaustubh Kuvalekar</h5>
							<p><strong>Team Leader</strong></p>
          		<a href="https://www.linkedin.com/in/kaustubh-kuvalekar-165079185/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/simran.jpg" alt="Simran" />
							<h5>Simran Malhotra</h5>
							<p><strong>Team Manager</strong></p>
          		<a href="https://www.linkedin.com/in/simranmalhotramit/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/malhotrasimran2000" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arthik.png" alt="Arthik" />
							<h5>Arthik Raj B Jain</h5>
							<p><strong>Electronics Head</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" className="img-thumbnail" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" className="img-thumbnail" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" className="img-thumbnail" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" className="img-thumbnail" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Mechanical</h2><br></br>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Electronics</h2><br></br>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/laaboni.jpg" alt="Laaboni" />
							<h5>Laaboni Mukerjee</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/laaboni-mukerjee-16b34b188/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Laaboni" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/meghang.jpg" alt="Meghang" />
							<h5>Meghang Nagavekar</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/meghang-nagavekar-b924b1196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/meghang-101" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/mukul.jpg" alt="Mukul" />
							<h5>Mukul Yadav</h5>
							<p><strong>Member</strong></p>
          		<a href="http://www.linkedin.com/in/mukul-yadav-14888a1a9" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/shubham.jpg" alt="Shubham" />
							<h5>Shubham Yadav</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/mwlite/in/shubham-yadav-57a447204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/vismay.jpg" alt="Vismay" />
							<h5>Vismay Sharma</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/vismay-sharma-500015204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/robologo.png" />
							<h5>Name</h5>
							<p><strong>Designation</strong></p>
          		<a href="https://www.linkedin.com/company/robomanipal/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Coding</h2><br></br>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/aman.png" alt="Aman" />
							<h5>Aman Paleja</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/aman-paleja-a18553170/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/41aman" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/arthur.jpg" alt="Arthur" />
							<h5>Arthur Gomes</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arthur-francis-gomes/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/arthurgomes4" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/diwij.jpg" alt="Diwij" />
							<h5>Diwij Narang</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/diwij-narang-4611781a7/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Diwij" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/pranjal.jpg" alt="Pranjal" />
							<h5>Pranjal Mishra</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/pranjal-mishra-3a79b0196/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Pranjalmishra30" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
					<h2 style={{ paddingTop: '30px', fontFamily: 'Montserrat-Bold' }}>Management</h2><br></br>
					<Row style={{ fontFamily: 'Montserrat' }}>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/.png" alt="Anwesha" />
							<h5>Anwesha</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/aman-paleja-a18553170/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/41aman" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/.jpg" alt="Aryan" />
							<h5>Aryan</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/arthur-francis-gomes/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/arthurgomes4" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/.jpg" alt="Jaishnav" />
							<h5>Jaishnav Gopi</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/diwij-narang-4611781a7/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Diwij" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/nikhil.jpg" alt="Nikhil" />
							<h5>Nikhil Poonacha</h5>
							<p><strong>Member</strong></p>
          		<a href="http://linkedin.com/in/nikhil-poonacha-9479b5188" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/saisindhu.jpg" alt="Saisindhu" />
							<h5>Saisindhu Valluri</h5>
							<p><strong>Member</strong></p>
          		<a href="https://www.linkedin.com/in/saisindhu-s-aa42b1204" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
          		<a href="https://github.com/Saisindhu-valluri" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
						<div className="col-xs-12 col-md-3 profile">
							<img src="assets/images/team/.jpg" alt="name" />
							<h5>Name</h5>
							<p><strong>Member</strong></p>
          		<a href="http://linkedin.com/in/nikhil-poonacha-9479b5188" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
							<a href="https://github.com/Diwij" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
						</div>
					</Row>
				</div>
			</Container>
			<Footer />
			</div>
    </div>
  )
}

export default Team;