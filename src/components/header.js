import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar expand="md" fixed="top">
				<NavbarToggler onClick={toggle}></NavbarToggler>
				<Collapse isOpen={isOpen} navbar className="order-md-0">
					<Nav className="ml-auto" navbar>
	          <NavItem className="mx-auto">
	            <a href="/" className="nav-link">HOME</a>
	          </NavItem>
	          <NavItem className="mx-auto">
	            <a href="/" className="nav-link">ABOUT</a>
	          </NavItem>
	          <NavItem className="mx-auto">
	            <a href="/" className="nav-link">WORK</a>
	          </NavItem>
	        	<NavItem className="mx-auto">
	            <a href="/" className="nav-link">COMPETITIONS</a>
	          </NavItem>
	        </Nav>
				</Collapse>
				<a href="/" className="navbar-brand order-md-1 mx-auto"><img id="logo" src="./assets/images/robologo.png" style={{height: 50}}></img></a>
				<Collapse isOpen={isOpen} navbar className="order-md-2">
					<Nav className="mr-auto" navbar>
	          <NavItem className="mx-auto">
	            <a href="/" className="nav-link">TEAM</a>
	          </NavItem>
	          <NavItem className="mx-auto">
	            <a href="/" className="nav-link">GALLERY</a>
	          </NavItem>
	          <NavItem className="mx-auto">
	            <a href="/" className="nav-link">SPONSORS</a>
	          </NavItem>
	        	<NavItem className="mx-auto">
	            <a href="/" className="nav-link">CONTACT</a>
	          </NavItem>
	        </Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default Header;