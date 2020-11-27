import React from 'react';

const Footer = () => {
	return (
    <div className="container-fluid">
		  <div className="row footer">
  			<div className="col text-center">
          <div className="row justify-content-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/RoboManipal" className="btn-lg mx-1" target="_blank">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/team.robomanipal?igshid=dw2nx6r5lcdb" className="btn-lg mx-1" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/robomanipal/" className="btn-lg mx-1" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <p style={{color: '#FFF'}}>© 2020 Team RoboManipal</p>
        </div>
		  </div>
    </div>
	)
}

export default Footer;