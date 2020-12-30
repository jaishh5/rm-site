import React from 'react'
import { Container, Form, Row } from 'reactstrap';

function Contact() {
  return (
    <div className="contact" id="contact">
			<Container>
				<div style={{paddingTop: '50px', paddingBottom: '50px'}}>
					<h1>CONTACT US</h1>
					<Row style={{paddingTop: '20px'}}>
						<div className="col-8 col-md-2 offset-md-4 offset-3">
							<Form>
								<div className="form-group row">
									<input type="text" placeholder="Name" />
								</div>
								<div className="form-group row">
									<input type="email" placeholder="Email" />
								</div>
								<div className="form-group row">
									<input type="text" placeholder="Subject" />
								</div>
								<div className="form-group row">
									<textarea rows="4" placeholder="Comments" />
								</div>
								<div className="form-group row">
									<button type="submit" className="btn btn-dark offset-2">
										SUBMIT
									</button>
								</div>
							</Form>
						</div>
						<div className="col-8 col-md-3 offset-md-0 contactcomp">
							<h5>
								Mukund Kumar Menon <br></br>
								<small>Faculty Advisor</small>
							</h5>
							<h5>
          			Kaustubh Kuvalekar <br></br>
          			<small>Team Leader</small>
        			</h5>
							<address>
          			<br></br>
          			<strong>Team RoboManipal</strong> <br></br>
          			MAHE Automobile Workshop <br></br>
          			Outside Kamath Circle <br></br>
          			Eshwar Nagar, Manipal <br></br>
          			Karnataka-576104 <br></br>
          			<i class="fa fa-envelope fa-lg"></i> : 
          			<a href="mailto:team.robomanipal@gmail.com">team.robomanipal@gmail.com</a>
        			</address>
						</div>
					</Row>
				</div>
			</Container>
    </div>
  )
}

export default Contact;