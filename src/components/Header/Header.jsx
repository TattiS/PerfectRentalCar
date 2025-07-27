import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrapper}>
          <div className={css.logoContainer}>
            <a className={css.link} href="/">
              <svg className={css.icon} width="104" height="16">
                <use href="/Logo.svg" />
              </svg>
            </a>
          </div>
          <nav className={css.navContainer}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.active}` : css.navLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.active}` : css.navLink
              }
            >
              Catalog
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
