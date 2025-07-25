import React from "react";
import { Link } from "react-router-dom";
import css from "./home-page.module.css";

const HomePage = () => {
  return (
    <section className={css.home}>
      <div className="home-container">
        <h1 className="home-title">Find your perfect car</h1>
        <p className="home-subtitle">Best car rental deals in one place</p>
        <Link to="/catalog" className="home-btn">
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
