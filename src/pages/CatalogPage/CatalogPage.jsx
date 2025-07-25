import React from "react";
import Filter from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  return (
    <section style={{ padding: "40px 16px" }}>
      <Filter />
      <CarsList />
      <LoadMoreBtn />
    </section>
  );
};

export default CatalogPage;
