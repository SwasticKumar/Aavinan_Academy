import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Learning", path: "/learning" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-md bg-body-tertiary px-4 ${styles.navbar}`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <NavLink
          className="navbar-brand d-flex align-items-center me-md-4"
          to="/"
        >
          <img src={logo} alt="logo" style={{ width: "40px" }} />
          <b className="mx-md-1 text-warning">
            Aa<span className="text-success">vin</span>
            <span style={{ color: "#1E40AF" }}>an</span>
          </b>
        </NavLink>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="d-md-flex justify-content-between align-items-center w-100">
            {/* Center: Navigation links */}
            <ul
              className={`navbar-nav mx-md-auto mb-2 mb-md-0 ${styles.navpad}`}
            >
              {navItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? styles.activeLink : ""}`
                    }
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeNavbar}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right: Sign In & Get Started */}
            <div
              className={`d-flex align-items-center gap-2 ${styles.authButtons}`}
            >
              <NavLink
                to="/signin"
                className="btn btn-link text-dark text-decoration-none"
              >
                Sign out
              </NavLink>
              <NavLink
                to="/get-started"
                className="btn border-0 text-white px-3 rounded-2"
                style={{ backgroundColor: "#1E40AF" }}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
