import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBrandFilter,
  changePriceFilter,
  changeMinMileageFilter,
  changeMaxMileageFilter,
  resetFilters,
  setSearchTrigger,
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

  const handleFiltersBtnClick = (event) => {
    event.preventDefault();
    dispatch(setSearchTrigger());
  };

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

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
            <form className={css.filtersForm} onSubmit={handleFiltersBtnClick}>
              <div className={css.inputWrapper}>
                <label htmlFor="brand-select">Car brand</label>
                <select
                  id="brand-select"
                  className={css.filtersInputBrand}
                  name="brand"
                  value={brand}
                  onChange={handleBrandChange}
                >
                  <option key="exp-brands" value="">
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
              </div>
              <div className={css.inputWrapper}>
                <label htmlFor="price-select">Price/ 1 hour</label>
                <select
                  id="price-select"
                  className={css.filtersInputPrice}
                  name="rentalPrice"
                  value={rentalPrice}
                  onChange={handlePriceChange}
                >
                  <option key="exp-price" value="">
                    Choose a price
                  </option>
                  {uniquePrices.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
              <fieldset className={css.mileageFilters}>
                <legend>Сar mileage / km</legend>
                <input
                  type="number"
                  name="minMileage"
                  placeholder="From"
                  value={minMileage ?? ""}
                  onChange={handleMinMileageChange}
                />
                <input
                  type="number"
                  name="maxMileage"
                  placeholder="To"
                  value={maxMileage ?? ""}
                  onChange={handleMaxMileageChange}
                />
              </fieldset>

              <Button type="submit" onClick={handleFiltersBtnClick}>
                Search
              </Button>
              <Button
                className={css.filtersResetBtn}
                type="button"
                onClick={handleResetClick}
              >
                Reset filters
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
