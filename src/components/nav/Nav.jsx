import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create"}>Create</NavLink>
    </nav>
  );
};

export default Nav;
