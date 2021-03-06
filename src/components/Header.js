import React, { Component } from "react";
import "../index";
import PropTypes from "prop-types";
import Left from "./left.svg";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container className="container">
        <Navbar
          color="white"
          light
          expand="md"
          className="shadow-md border-grey border-bottom"
          style={{ width: "1156 px", height: "50 px" }}
        >
          <NavbarBrand href="/" className="navImg">
            <img src={Left} alt="AVCI" style={{ cursor: "default" }} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-3">
                <Link
                  to="/"
                  style={{
                    fontWeight: "bold",
                    color: "#1A3C7E"
                  }}
                >
                  Anasayfa
                </Link>
              </NavItem>

              <NavItem className="ml-3">
                <Link
                  to="/universities"
                  style={{
                    fontWeight: "bold",
                    color: "#1A3C7E"
                  }}
                >
                  Üniversiteler
                </Link>
              </NavItem>

              <NavItem className="ml-3">
                <Link
                  to="/students"
                  style={{
                    fontWeight: "bold",
                    color: "#1A3C7E"
                  }}
                >
                  Öğrenciler
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
export default HomePage;
