import React from "react";
import { NavLink } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className="logo">
          Rental<span className="logo-blue">Car</span>
        </div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
