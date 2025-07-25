import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBrandFilter,
  changePriceFilter,
  changeMinMileageFilter,
  changeMaxMileageFilter,
  resetFilters,
} from "../../redux/filters/filtersSlice";
import { getBrands } from "../../redux/filters/filtersOperations";
import {
  selectBrand,
  selectBrands,
  selectPrice,
  selectMinMileage,
  selectMaxMileage,
} from "../../redux/filters/filtersSelectors";
import { selectUniqueRentalPrices } from "../../redux/cars/carsSelectors.js";
import css from "./Filters.module.css";
import { nanoid } from "nanoid";
import Button from "../Button/Button.jsx";

export default function Filter() {
  const dispatch = useDispatch();

  const handleFiltersBtnClick = () => {
    console.log("Go! ");
  };

  const brand = useSelector(selectBrand);
  const brands = useSelector(selectBrands);
  const rentalPrice = useSelector(selectPrice);
  const minMileage = useSelector(selectMinMileage);
  const maxMileage = useSelector(selectMaxMileage);

  const brandsWithId = useMemo(
    () => brands.map((item) => ({ id: nanoid(), value: item })),
    [brands]
  );
  const uniquePrices = useSelector(selectUniqueRentalPrices);
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const handleResetClick = () => {
    dispatch(resetFilters());
  };
  const handleBrandChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeBrandFilter(filterValue));
  };
  const handlePriceChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changePriceFilter(filterValue));
  };
  const handleMinMileageChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeMinMileageFilter(filterValue));
  };
  const handleMaxMileageChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeMaxMileageFilter(filterValue));
  };

  return (
    <>
      <div className={`${css.filtersContainer}`}>
        <div className={css.filtersRow}>
          <div className="filtersInputsWrapper">
            <form className={css.filtersForm}>
              <button
                className={css.filtersResetBtn}
                type="button"
                onClick={handleResetClick}
              >
                Reset filters
              </button>
              <select
                className={css.filtersInputBrand}
                name="brand"
                value={brand}
                onChange={handleBrandChange}
              >
                <option key="exp-brands" value="" disabled selected>
                  Choose a brand
                </option>
                <option key="all-brands" value="">
                  All
                </option>
                {brandsWithId.map((brand) => (
                  <option key={brand.id} value={brand.value}>
                    {brand.value}
                  </option>
                ))}
              </select>
              <select
                className={css.filtersInputPrice}
                name="rentalPrice"
                value={rentalPrice}
                onChange={handlePriceChange}
              >
                <option key="exp-price" value="" disabled selected>
                  Choose a price
                </option>
                {uniquePrices.map((price) => (
                  <option key={price} value={price}>
                    price
                  </option>
                ))}
              </select>

              <fieldset className={css.mileageFilters}>
                <legend>Сar mileage / km</legend>
                <input
                  type="number"
                  name="minMileage"
                  placeholder="From"
                  value={minMileage}
                  onChange={handleMinMileageChange}
                />
                <input
                  type="number"
                  name="maxMileage"
                  placeholder="To"
                  value={maxMileage}
                  onChange={handleMaxMileageChange}
                />
              </fieldset>

              <Button type="submit" onClick={handleFiltersBtnClick}>
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
