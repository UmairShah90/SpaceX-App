import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Rocket from "../../Images/space-icon.png";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <Navbar
      collapseOnSelect
      className="header-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Link to="/">     
       <img src={Rocket} alt="icon" className="space-logo" /></Link>

      <Nav>
        <Link className="anchor" to="/">
          Home
        </Link>
        <Link className="anchor" to="/launches">
          Launches
        </Link>

        <Link
          className="anchor"
          to="/rockets"
          
        >
          Rockets
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
