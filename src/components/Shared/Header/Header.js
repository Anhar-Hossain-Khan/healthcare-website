import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css'

const Header = () => {
    return (
      <>
      <Navbar bg="info" className="p-3 header" sticky="top" collapseOnSelect expand="lg">
       <Container>
       <Navbar.Brand as={HashLink} to="#home" className="fw-bold text-danger">HealthCare</Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end fw-bold">
       <Nav.Link  as={HashLink} to="/home#home">Home</Nav.Link>
       <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
       <Nav.Link  as={HashLink} to="/home#doctors">Doctors</Nav.Link>
       <Nav.Link  as={HashLink} to="/home#about">About Us</Nav.Link>
       <Nav.Link  as={HashLink} to="/home#contact">Contact</Nav.Link>

       <Button variant="danger">LogOut</Button>
       <Nav.Link as={Link} to="/login">Login</Nav.Link>
       </Navbar.Collapse>

       </Container>
       </Navbar>
      </>
    );
};

export default Header;