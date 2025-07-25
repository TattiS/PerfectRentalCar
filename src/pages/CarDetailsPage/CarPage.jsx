import React from "react";
import { useParams } from "react-router-dom";

const CarPage = () => {
  const { id } = useParams();

  return (
    <section style={{ padding: "40px 16px" }}>
      <h2>Car Details</h2>
      <p>Selected car ID: {id}</p>
      {/* Тут буде детальна інформація + форма */}
    </section>
  );
};

export default CarPage;
