import React,{useState} from 'react';
import { Form, Row } from 'reactstrap';
import axios from 'axios';

function Test() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [subject,setSubject] = useState('')

  function resetForm(){
    setName('')
    setEmail('')
	  setMessage('')
	  setSubject('')
  }

  function handleSubmit(event){
    event.preventDefault();
    
    axios({
      method: "POST",
      url: "/send",
      data: {
        name: name,
        email: email,
		    message: message,
		    subject:subject
      }
    }).then((response)=>{
      if(response.data.status === 'success'){
        alert("Message Sent");
        resetForm();
      }
      else if(response.data.status === 'fail'){
        alert("Message Failed to send");
      }
    })
  };

  return (
    <div className="contact" >
			<div className="col-12 col-md-7 form" style={{ textAlign: 'center' }}>
				<Row className=" justify-content-center contacthead" style={{ paddingTop: '30px' }}>
					<span></span>  
					<h3 style={{color: 'white', fontFamily: 'Montserrat-Bold' }}>   CONTACT US   </h3>
					<span></span>
				</Row>
				<form style={{ paddingTop: '30px', color: 'white' }} onSubmit={(event)=>handleSubmit(event)}>
					<input type="text" name="name" className="feedback-input" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required />
					<input type="email" name="email" className="feedback-input" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
					<input type="text" name="subject" className="feedback-input" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
					<textarea name="message" rows="5" className="feedback-input" placeholder="Message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea> <br/>
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