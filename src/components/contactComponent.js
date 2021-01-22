import React, { useEffect } from 'react';
import { Row } from 'reactstrap';
import Aos from "aos"
import "aos/dist/aos.css"

function Test() {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

  return (
    <div className="contact" >
			<div data-aos="fade-right" className="col-12 col-md-7 form">
				<Row className=" justify-content-center contacthead" style={{ paddingTop: '30px' }}>
					<span></span>  
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   CONTACT US   </h3>
					<span></span>
				</Row>
				<form style={{ paddingTop: '30px', color: 'white' }} >
					<input type="text" name="name" className="feedback-input" placeholder="Name" required />
					<input type="email" name="email" className="feedback-input" placeholder="Email" required />
					<input type="text" name="subject" className="feedback-input" placeholder="Subject" />
					<textarea name="message" rows="5" className="feedback-input" placeholder="Message" ></textarea> <br/>
					<input type="submit" value="SUBMIT" className="feedback-input submit" />
				</form>
			</div>
			<div data-aos="fade-down" className="col-12 col-md-5 offset-md-7 contactinfo">
				<div style={{ height: '50%', padding: '60px' }}>
					<h4><b>Kaustubh Kuvalekar</b></h4>
					<h6>Team Leader</h6>
					<address>
						<br/>
						<strong>Team RoboManipal</strong> <br/>
          	MAHE Automobile Workshop, <br/>
          	Outside Kamath Circle, <br/>
          	Eshwar Nagar, Manipal, <br/>
          	Karnataka-576104 <br/> <br/>
						<a href="tel:+919008147494" style={{ textDecoration: 'none', color: 'black' }}>90081 47494</a> <br/> <br/>
						<a href="mailto:team.robomanipal@gmail.com" style={{ textDecoration: 'none', color: 'black' }}>team.robomanipal@gmail.com</a>
					</address>
				</div>
			</div>
    </div>
  )
}

export default Test;