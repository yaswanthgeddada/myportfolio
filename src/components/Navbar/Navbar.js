import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <header className="navbar">
        <NavLink exact activeClassName="active" to="/" className="item">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/" className="item">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/projects" className="item">
          Projects
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="item">
          Contact
        </NavLink>
      </header>
    </div>
  );
};

export default Navbar;
