import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from './../../hooks/UseAuth';

const Header = () => {
  const { LogOut, user } = UseAuth()
  return (
    <div>
      <Navbar bg="dark" variant="light" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><img src="http://asianitbd.com/wp/hopemedical/wp-content/themes/hopemedical/images/logo.png" /></Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            {/* <Nav className="me-auto"> */}
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/doctor">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            {
              user.email ? <Nav.Link ><button className="btn btn-light" variant="light" onClick={LogOut}>LogOut</button></Nav.Link> :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>

            }
            <Nav.Link>{user.displayName}</Nav.Link>
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div >
  );
};

export default Header;