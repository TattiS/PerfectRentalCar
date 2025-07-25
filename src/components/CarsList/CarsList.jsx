import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./CarsList.module.css";

import {
  selectCarsError,
  selectCars,
  selectCarsLoading,
  selectHasMore,
} from "../../redux/cars/carsSelectors.js";
import { genericErrorMessage } from "../../redux/utils/generateThunk.js";
import CarCard from "../CarCard/CarCard";
import { getCars } from "../../redux/cars/carsOperations.js";
import { selectFavorites } from "../../redux/favorites/favoritesSelectors.js";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

import {
  selectBrand,
  selectPrice,
  selectMinMileage,
  selectMaxMileage,
} from "../../redux/filters/filtersSelectors.jsx";

function CarsList() {
  const dispatch = useDispatch();

  const brandValue = useSelector(selectBrand);
  const priceValue = useSelector(selectPrice);
  const minMileageValue = useSelector(selectMinMileage);
  const maxMileageValue = useSelector(selectMaxMileage);
  const cars = useSelector(selectCars);
  const hasMore = useSelector(selectHasMore);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);

  const [page, setPage] = useState(1);

  const prevLengthRef = useRef(0);
  // const cardRef = useRef(null);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setPage((prev) => (prev !== 1 ? 1 : prev));
  }, [brandValue, priceValue, minMileageValue, maxMileageValue]);

  useEffect(() => {
    dispatch(
      getCars({
        brand: brandValue,
        rentalPrice: priceValue,
        minMileage: minMileageValue,
        maxMileage: maxMileageValue,
        page: page,
      })
    );
  }, [
    dispatch,
    brandValue,
    priceValue,
    minMileageValue,
    maxMileageValue,
    page,
  ]);

  const newItemRef = useRef(null);

  useEffect(() => {
    if (page > 1 && cars.length > prevLengthRef.current && newItemRef.current) {
      newItemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    prevLengthRef.current = cars.length;
  }, [cars, page]);

  return (
    <>
      <div className={css.carsList}>
        {!isLoading && error && <p>{genericErrorMessage}</p>}
        {!isLoading && !error && cars.length > 0 && (
          <ul className={css.list}>
            {cars.map((car, index) => {
              const isFirstNew = page > 1 && index === prevLengthRef.current;
              return (
                <li key={car.id} ref={isFirstNew ? newItemRef : null}>
                  <CarCard
                    car={car}
                    isFavorite={favorites.some((fav) => fav.id === car.id)}
                    showRemoveButton={false}
                  />
                </li>
              );
            })}
          </ul>
        )}
        {isLoading && <Loader />}
        {!isLoading && hasMore && !error && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </>
  );
}

export default CarsList;
