import css from "./home-page.module.css";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  return (
    <section className={css.home}>
      <div className="home-container">
        <Hero />
      </div>
    </section>
  );
};

export default HomePage;
