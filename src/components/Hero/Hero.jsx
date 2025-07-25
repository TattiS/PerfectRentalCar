import Button from "../Button/Button";
import css from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.overlay}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog" className={css.button}>
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default Hero;
