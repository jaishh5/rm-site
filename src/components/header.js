import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar expand="md" fixed="top">
				<Collapse isOpen={isOpen} navbar className="order-md-0">
					<Nav className="ml-auto" navbar>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">HOME</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">ABOUT</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">WORK</a>
	          </NavItem>
	        	<NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">COMPETITIONS</a>
	          </NavItem>
	        </Nav>
				</Collapse>
				<a href="/" className="navbar-brand order-md-1 mx-auto" style={{paddingRight: '1rem'}}><img id="logo" src="./assets/images/logo2.jpg" style={{height: 50}}></img></a>
				<Collapse isOpen={isOpen} navbar className="order-md-2">
					<Nav className="mr-auto" navbar>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">TEAM</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">GALLERY</a>
	          </NavItem>
	          <NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">SPONSORS</a>
	          </NavItem>
	        	<NavItem className="mx-auto navlink">
	            <a href="/" className="navlink nav-link">CONTACT</a>
	          </NavItem>
	        </Nav>
				</Collapse>
				<NavbarToggler onClick={toggle}></NavbarToggler>
			</Navbar>
		</div>
	);
}

export default Header;