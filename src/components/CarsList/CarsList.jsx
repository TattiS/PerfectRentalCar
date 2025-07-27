import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./CarsList.module.css";

import {
  selectCarsError,
  selectCars,
  selectCarsLoading,
  selectHasMore,
  selectPage,
} from "../../redux/cars/carsSelectors.js";
import { setPage } from "../../redux/cars/carsSlice.js";
import { genericErrorMessage } from "../../redux/utils/generateThunk.js";
import CarCard from "../CarCard/CarCard";
import { getCars } from "../../redux/cars/carsOperations.js";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

import { selectSearchTrigger } from "../../redux/filters/filtersSelectors.jsx";

function CarsList() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);
  const searchTrigger = useSelector(selectSearchTrigger);
  const page = useSelector(selectPage);

  const prevLengthRef = useRef(0);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch, searchTrigger]);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, searchTrigger, page]);

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
                  <CarCard car={car} />
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
