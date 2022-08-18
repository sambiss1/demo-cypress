import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavButtonLink = styled.button`
  background: transparent;
  border-radius: 3px;
  border: none;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  a {
    text-decoration: none;
  }
`;

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavButtonLink className="link--home">
        <Link to="/">Home</Link>
      </NavButtonLink>
      <NavButtonLink className="link--about">
        <Link to="/about">About</Link>
      </NavButtonLink>
      <NavButtonLink className="link--services">
        <Link to="/services">Services</Link>
      </NavButtonLink>
      <NavButtonLink className="link--contact">
        <Link to="/contact">Contact</Link>
      </NavButtonLink>
    </div>
  );
};

export default NavBar;
