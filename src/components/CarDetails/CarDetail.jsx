import RentalForm from "../RentalForm/RentalForm";
import css from "./CarDetails.module.css";

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
    <div className={css.detailsWrapper}>
      <div className={css.leftSide}>
        <img
          src={img}
          alt={`${brand} ${model}`}
          className={css.carImg}
          width={640}
          height={512}
        />
        <RentalForm car={car} />
      </div>
      <div className={css.rightSide}>
        <h1 className={css.title}>
          {brand} {model}, {year}
          <span className={css.carId}>Id: {id}</span>
        </h1>

        <p className={css.location}>📍 {address}</p>
        <p className={css.price}>${rentalPrice}</p>
        <p className={css.description}>{description}</p>

        <div>
          <h2 className={css.subheading}>Rental Conditions:</h2>
          <ul className={css.list}>
            {rentalConditions.map((cond, i) => (
              <li key={i}>✔ {cond}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={css.subheading}>Car Specifications:</h2>
          <ul className={css.list}>
            <li>🏢 Company: {rentalCompany}</li>
            <li>📅 Year: {year}</li>
            <li>🚘 Type: {type}</li>
            <li>⛽ Fuel Consumption: {fuelConsumption} L/100km</li>
            <li>⚙ Engine Size: {engineSize}</li>
            <li>🧭 Mileage: {mileage.toLocaleString()} km</li>
          </ul>
        </div>

        <div>
          <h2 className={css.subheading}>Accessories:</h2>
          <ul className={css.list}>
            {accessories.map((item, i) => (
              <li key={i}>🛠 {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={css.subheading}>Functionalities:</h2>
          <ul className={css.list}>
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
