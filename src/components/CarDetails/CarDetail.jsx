import RentalForm from "../RentalForm/RentalForm";
import css from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  const {
    img,
    brand,
    model,
    year,
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
          <span className={css.carId}>
            Id: {img.match(/\/(\d+)-ai\.jpg$/)?.[1]}
          </span>
        </h1>

        <p className={css.location}>
          <svg className={css.icon} width="16" height="16">
            <use href="/sprite.svg#pin-icon" />
          </svg>{" "}
          {address}
        </p>
        <p className={css.price}>${rentalPrice}</p>
        <p className={css.description}>{description}</p>

        <div>
          <h3 className={css.subheading}>Rental Conditions:</h3>
          <ul className={css.list}>
            {rentalConditions.map((cond, i) => (
              <li key={i}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/sprite.svg#v-sign-icon" />
                </svg>
                <p> {cond}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={css.subheading}>Car Specifications:</h3>
          <ul className={css.list}>
            <li>
              <svg className={css.icon} width="16" height="16">
                <use href="/sprite.svg#calendar-icon" />
              </svg>
              <p>Year: {year}</p>
            </li>
            <li>
              <svg className={css.icon} width="16" height="16">
                <use href="/sprite.svg#car-icon" />
              </svg>
              <p>Type: {type}</p>
            </li>
            <li>
              <svg className={css.icon} width="16" height="16">
                <use href="/sprite.svg#gear-icon" />
              </svg>
              <p>Fuel Consumption: {fuelConsumption} L/100km</p>
            </li>
            <li>
              <svg className={css.icon} width="16" height="16">
                <use href="/sprite.svg#car-icon" />
              </svg>
              <p>Engine Size: {engineSize}</p>
            </li>
            <li>
              <svg className={css.icon} width="16" height="16">
                <use href="/sprite.svg#car-icon" />
              </svg>
              <p>Mileage: {mileage.toLocaleString()} km</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={css.subheading}>Accessories and functionalities:</h3>
          <ul className={css.list}>
            {accessories.map((item, i) => (
              <li key={i}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/sprite.svg#v-sign-icon" />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul className={css.list}>
            {functionalities.map((item, i) => (
              <li key={i}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/sprite.svg#v-sign-icon" />
                </svg>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
