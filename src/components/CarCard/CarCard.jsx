import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { selectFavorites } from "../../redux/favorites/favoritesSelectors";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);
  const isFavorite = id && favorites.includes(id);

  const addressParts = address?.split(", ");
  const city = addressParts?.[1] ?? "Unknown";
  const country = addressParts?.[2] ?? "Unknown";

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const handleReadMoreBtn = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className={css.carCard}>
      <div className={css.carCardImageContainer}>
        <img
          src={img}
          alt={`${brand} ${model}`}
          className={css.carCardImage}
          width="276px"
          height="268px"
        />
        <button
          className={`${css.favoriteButton} ${isFavorite ? css.active : ""}`}
          onClick={handleToggleFavorite}
          aria-label="Toggle favorite"
        >
          <svg
            className={`${css.heartIcon} ${isFavorite ? css.active : ""}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="/sprite.svg#heart-icon" />
          </svg>
        </button>
      </div>

      <div className={css.carCardInfo}>
        <div className={css.carCardHeader}>
          <h3 className={css.carCardTitle}>
            {brand} <span className={css.carCardModel}>{model}</span>, {year}
          </h3>
          <p className={css.carCardPrice}>${rentalPrice}</p>
        </div>
        <div className={css.carCardDetailsWrapper}>
          <div className={css.carCardDetails}>
            <span className={css.carCardDetail}>{city}</span>
            <span className={css.carCardDivider}>|</span>
            <span className={css.carCardDetail}>{country}</span>
            <span className={css.carCardDivider}>|</span>
            <span className={css.carCardDetail}>{rentalCompany}</span>
            <span className={css.carCardDivider}>|</span>
          </div>
          <div className={css.carCardDetails}>
            <span className={css.carCardDetail}>{type}</span>
            <span className={css.carCardDivider}>|</span>
            <span className={css.carCardDetail}>
              {mileage?.toLocaleString("uk-UA") ?? "N/A"} km
            </span>
          </div>
        </div>
        <button className={css.carCardButton} onClick={handleReadMoreBtn}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default CarCard;
