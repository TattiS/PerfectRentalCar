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
        <img src={img} alt={`${brand} ${model}`} className={css.carCardImage} />
        <button
          className={`${css.favoriteButton} ${isFavorite ? css.active : ""}`}
          onClick={handleToggleFavorite}
          aria-label="Toggle favorite"
        >
          <svg
            className={`${css.heartIcon} ${isFavorite ? css.active : ""}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                     2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                     C13.09 3.81 14.76 3 16.5 3
                     C19.58 3 22 5.42 22 8.5
                     c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
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

        <div className={css.carCardDetails}>
          <span className={css.carCardDetail}>{city}</span>
          <span className={css.carCardDivider}>|</span>
          <span className={css.carCardDetail}>{country}</span>
          <span className={css.carCardDivider}>|</span>
          <span className={css.carCardDetail}>{rentalCompany}</span>
          <span className={css.carCardDivider}>|</span>
          <span className={css.carCardDetail}>{type}</span>
          <span className={css.carCardDivider}>|</span>
          <span className={css.carCardDetail}>
            {mileage?.toLocaleString("uk-UA") ?? "N/A"} km
          </span>
        </div>

        <button className={css.carCardButton} onClick={handleReadMoreBtn}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default CarCard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
// import { selectFavorites } from "../../redux/favorites/favoritesSelectors";
// import css from "./CarCard.module.css";

// const CarCard = ({ car }) => {
//   const {
//     id,
//     year,
//     brand,
//     model,
//     type,
//     img,
//     rentalPrice,
//     rentalCompany,
//     address,
//     mileage,
//   } = car;
//   console.log("Car in Card", car);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const favorites = useSelector(selectFavorites);
//   const isFavorite = favorites.includes(id);

//   const addressParts = address?.split(", ");
//   const city = addressParts?.[1] ?? "Unknown";
//   const country = addressParts?.[2] ?? "Unknown";
//   console;
//   const handleReadMoreBtn = () => {
//     navigate(`/catalog/${id}`);
//   };

//   return (
//     <div className={css.carCard}>
//       <div className={css.carCardImageContainer}>
//         <img src={img} alt={`${brand} ${model}`} className={css.carCardImage} />
//         <button
//           className={`${css.favoriteButton} ${isFavorite ? css.active : ""}`}
//           onClick={() => dispatch(toggleFavorite(id))}
//           aria-label="Toggle favorite"
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill={isFavorite ? "red" : "none"}
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//                      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
//                      C13.09 3.81 14.76 3 16.5 3
//                      C19.58 3 22 5.42 22 8.5
//                      c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className={css.carCardInfo}>
//         <div className={css.carCardHeader}>
//           <h3 className={css.carCardTitle}>
//             {brand} <span className={css.carCardModel}>{model}</span>, {year}
//           </h3>
//           <p className={css.carCardPrice}>${rentalPrice}</p>
//         </div>

//         <div className={css.carCardDetails}>
//           <span className={css.carCardDetail}>{city}</span>
//           <span className={css.carCardDivider}>|</span>
//           <span className={css.carCardDetail}>{country}</span>
//           <span className={css.carCardDivider}>|</span>
//           <span className={css.carCardDetail}>{rentalCompany}</span>
//           <span className={css.carCardDivider}>|</span>
//           <span className={css.carCardDetail}>{type}</span>
//           <span className={css.carCardDivider}>|</span>
//           <span className={css.carCardDetail}>
//             {mileage?.toLocaleString("uk-UA") ?? "N/A"} km
//           </span>
//         </div>

//         <button className={css.carCardButton} onClick={handleReadMoreBtn}>
//           Read more
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard;
