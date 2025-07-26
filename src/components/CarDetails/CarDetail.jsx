import RentalForm from "../RentalForm/RentalForm";
import styles from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  const {
    img,
    brand,
    model,
    year,
    id,
    address,
    mileage,
    rentalPrice,
    description,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalCompany,
  } = car;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src={img} alt={`${brand} ${model}`} className={styles.image} />
        <RentalForm car={car} />
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>
          {brand} {model}, {year}
          <span className={styles.carId}>Id: {id}</span>
        </h1>

        <p className={styles.location}>📍 {address}</p>
        <p className={styles.price}>${rentalPrice}</p>
        <p className={styles.description}>{description}</p>

        <div>
          <h2 className={styles.subheading}>Rental Conditions:</h2>
          <ul className={styles.list}>
            {rentalConditions.map((cond, i) => (
              <li key={i}>✔ {cond}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.subheading}>Car Specifications:</h2>
          <ul className={styles.list}>
            <li>🏢 Company: {rentalCompany}</li>
            <li>📅 Year: {year}</li>
            <li>🚘 Type: {type}</li>
            <li>⛽ Fuel Consumption: {fuelConsumption} L/100km</li>
            <li>⚙ Engine Size: {engineSize}</li>
            <li>🧭 Mileage: {mileage.toLocaleString()} km</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.subheading}>Accessories:</h2>
          <ul className={styles.list}>
            {accessories.map((item, i) => (
              <li key={i}>🛠 {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.subheading}>Functionalities:</h2>
          <ul className={styles.list}>
            {functionalities.map((item, i) => (
              <li key={i}>⚙ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
