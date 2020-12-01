import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './dropdown.css';
import { useDetectOutsideClick } from './useDetectOutsideClick';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const [bgColor, setbgColor] = useState('bg-black navbar-dark');

	const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
	const onClick = () => setIsActive(!isActive);

	return (
		<div>
			<Navbar expand="md" fixed="top" className={bgColor}>
				<a href="/" className="navbar-brand order-md-1 mx-auto" style={{paddingRight: '1rem'}}><img alt="logo" id="logo" src="./assets/images/logo2.jpg" style={{height: 50}}></img></a>
				<NavbarToggler onClick={toggle}></NavbarToggler>
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
				<Collapse isOpen={isOpen} navbar className="order-md-2">
					<Nav className="mr-auto" navbar>
	          <NavItem className="mx-auto navlink menu-container">
	            <button onClick={onClick} href="/" className="navlink nav-link menu-trigger">
								TEAM <i className="fa fa-caret-down" />
							</button>
							<nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
								<ul>
									<li><a href="/team">CURRENT TEAM</a></li>
									<li><a href="/">OUR ALUMNI</a></li>
								</ul>
							</nav>
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
			</Navbar>
		</div>
	);
}

export default Header;