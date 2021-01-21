import React from 'react'
import { Form, Row } from 'reactstrap';

function Test() {
  return (
    <div className="contact" >
			<div className="col-12 col-md-7 form" style={{ textAlign: 'center' }}>
				<Row className=" justify-content-center contacthead" style={{ paddingTop: '30px' }}>
					<span></span>  
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   CONTACT US   </h3>
					<span></span>
				</Row>
				<form style={{ paddingTop: '30px', color: 'white' }}>
					<input type="text" name="name" className="feedback-input" placeholder="Name" required />
					<input type="email" name="email" className="feedback-input" placeholder="Email" required />
					<input type="text" name="subject" className="feedback-input" placeholder="Subject" />
					<textarea name="message" rows="5" className="feedback-input" placeholder="Message"></textarea> <br/>
					<input type="submit" value="SUBMIT" className="feedback-input submit" />
				</form>
			</div>
			<div className="col-12 col-md-5 offset-md-7 contactinfo" style={{ height: '90vh', fontFamily: 'Montserrat' }}>
				<div style={{ margin: 'auto', height: '50%', width: '70%', padding: '50px' }}>
					<div>
						<i class="fa fa-user contacticon"> </i> <span>  TEAM LEADER </span>
					</div>
					<div>
						<i class="fa fa-map-marker contacticon">
          		
						</i> <span>Team RoboManipal <br/>
          		MAHE Automobile Workshop <br/>
          		Outside Kamath Circle <br/>
          		Eshwar Nagar, Manipal <br/>
          		Karnataka-576104 </span> <br/>
					</div>
					<div>
						<i class="fa fa-phone contacticon"></i> <span> 90081 47494</span> <br/> 
					</div>
					<div>
						<i class="fa fa-envelope contacticon">
          		
						</i><a href="mailto:team.robomanipal@gmail.com" style={{ textDecoration: 'none', color: 'black' }}> TEAM.ROBOMANIPAL@</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Test;