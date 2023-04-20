import React from "react";
import { NavLink as NavLinkBase } from "react-router-dom";
import { styled } from "@mui/system";

const NavLink = styled((props) => (
  <NavLinkBase {...props} end={props.to === "/"} />
))(({ theme }) => ({
  textDecoration: "none",

  "&.active": {
    color: "green",
    fontSize: theme.spacing(3),
  },
}));

const Nav = () => {
  return (
    <>
      {/* <a href="#about">Hero</a> */}
      <NavLink to="#about">
        <a href="#about">Hero</a>
      </NavLink>
      <ul style={{ position: "fixed", marginTop: "100px" }}>
        <li>
          <NavLink>
            <a href="#about">Hero</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Foo</NavLink>
        </li>
        <li>
          <NavLink to="/">Bar</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
