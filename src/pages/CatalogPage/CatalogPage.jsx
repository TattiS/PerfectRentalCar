import React from "react";
import Filter from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";

const CatalogPage = () => {
  return (
    <section style={{ width: "100%", padding: "40px 16px" }}>
      <Filter />
      <CarsList />
    </section>
  );
};

export default CatalogPage;
