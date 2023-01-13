import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const NavbarComponent = () => {
    return(
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">MapBox Integration</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
    )
  }

  export default NavbarComponent;