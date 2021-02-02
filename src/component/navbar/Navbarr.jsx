import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

class Navbarr extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="text-primary">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="text-info">
              Strona główna
            </Nav.Link>
            <Nav.Link as={Link} to="/wykresy" className="text-info">
              Wykresy
            </Nav.Link>
            <Nav.Link as={Link} to="/animacje" className="text-info">
              Animacje
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbarr;
