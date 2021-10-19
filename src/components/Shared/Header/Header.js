import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './header.css'

const Header = () => {
  const {user, logout} = useAuth();
    return (
      <>
      <Navbar bg="info" className="p-3 header" sticky="top" collapseOnSelect expand="lg">
       <Container>
       <Navbar.Brand href="#home" className="fw-bold text-danger">GreenLife Hospital</Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end fw-bold">
       <Nav.Link  as={Link} to="/home">Home</Nav.Link>
       <Nav.Link  as={Link} to="/services">Services</Nav.Link>
       <Nav.Link  as={Link} to="/doctors">Doctors</Nav.Link>
       <Nav.Link  as={Link} to="/activities">Activities</Nav.Link>
       <Navbar.Text>
        <a href="#login" className="text-danger text-decoration-none" >{user?.displayName}</a>
      </Navbar.Text>
       {user?.photoURL ?
         <Button  onClick={logout} variant="danger" className="ms-2 text-white" >LogOut</Button>:
         <Nav.Link as={Link} to="/login">Login</Nav.Link>
       }
       </Navbar.Collapse>
       </Container>
       </Navbar>
      </>
    );
};

export default Header;