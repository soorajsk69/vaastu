import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css'; 
import img3 from '../img/logo.jpg';

export default function Header() {
  return (
    <div className="head">
      
      <Navbar expand="lg" className="bg-body-tertiary">
        
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <div className="logo-container mx-auto text-center">
          <Nav.Link herf="">

            <img
              alt=""
              src={img3}
              width="80"
              height="80"
              className="d-inline-block align-top logo-image"
            />
            </Nav.Link>
          </div>
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="about.html">About</Nav.Link>
              <Nav.Link href="store.html">Services</Nav.Link>
              <Nav.Link href="contact.html">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  );
}
