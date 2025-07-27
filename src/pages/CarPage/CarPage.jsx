import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarById } from "../../redux/cars/carsOperations";
import { selectCarById } from "../../redux/cars/carsSelectors";
import CarDetails from "../../components/CarDetails/CarDetail";

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const carFromStore = useSelector((state) => selectCarById(state, id));

  const [car, setCar] = useState(carFromStore);
  const [loading, setLoading] = useState(!carFromStore);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!carFromStore) {
      setLoading(true);
      dispatch(getCarById(id))
        .unwrap()
        .then(setCar)
        .catch((err) => setError(err.message || "Unknown error"))
        .finally(() => setLoading(false));
    }
  }, [id, carFromStore, dispatch]);

  if (loading) return <p>Loading car...</p>;
  if (error) return <p>Error loading car: {error}</p>;
  if (!car) return <p>Car not found</p>;

  return (
    <section style={{ width: "100%", padding: "40px 16px" }}>
      <CarDetails car={car} />
    </section>
  );
};

export default CarPage;
