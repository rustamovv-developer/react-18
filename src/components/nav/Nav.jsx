import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/react.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <img src={logo} alt="" className="nav__img" />
          <NavLink className="nav__link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav__link" to={"/create"}>
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
