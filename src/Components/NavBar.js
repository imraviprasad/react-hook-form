import React from "react";

import { Link } from "react-router-dom";

import { NavBarContainer, InsideLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">
        <InsideLink>React Hook Form</InsideLink>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
