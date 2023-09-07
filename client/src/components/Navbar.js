import React from "react";

import { NavLink } from "react-router-dom"; // import Link in addition to other Components
// import logo from "../logo.svg";

export default function Navbar() {

  return (
    <>
      <nav className="">
        <img src="" className="" alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/chart">Chart</NavLink>
        <NavLink to="/upload">Upload</NavLink>
      </nav>
    </>
  );
};

