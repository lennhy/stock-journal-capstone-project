import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/chart">Chart</NavLink>
      </header>
    </>
  );
};

export default Navbar;
