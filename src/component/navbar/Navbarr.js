import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
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
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/wykresy" className="text-info">
              Wykres
            </Nav.Link>
            <Nav.Link as={Link} to="/animacje" className="text-info">
              Animacje
            </Nav.Link>
            {/* <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="text-info" //nic to nie daje chbya
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbarr;
