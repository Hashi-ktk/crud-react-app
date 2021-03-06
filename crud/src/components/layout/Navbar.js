/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <a className="navbar-brand" href="#">
        {" "}
        React Crud{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <Link className="btn btn-outline-dark w-2" to="/user/add">Add Users</Link>
      </div>
    </nav>
  );
};
export default Navbar;
