import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
      <>
      <Navbar bg="info" className="p-3 header" sticky="top" collapseOnSelect expand="lg">
       <Container>
       <Navbar.Brand href="#home" className="fw-bold text-danger">HealthCare</Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end fw-bold">
       <Nav.Link  as={Link} to="/home">Home</Nav.Link>
       <Nav.Link  as={Link} to="/services">Services</Nav.Link>
       <Nav.Link  as={Link} to="/doctors">Doctors</Nav.Link>
       <Nav.Link  as={Link} to="/home#about">About Us</Nav.Link>
       <Nav.Link  as={Link} to="/home#contact">Contact</Nav.Link>

       <Navbar.Text>
        <a href="#login">{user?.displayName}</a>
      </Navbar.Text>

       {user?.photoURL ?
         <Button  onClick={logOut} variant="danger" className="ms-1" >LogOut</Button>:
         <Nav.Link as={Link} to="/login">Login</Nav.Link>
       }
       </Navbar.Collapse>

       </Container>
       </Navbar>
      </>
    );
};

export default Header;