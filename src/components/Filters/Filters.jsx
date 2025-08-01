import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBrandFilter,
  changePriceFilter,
  changeMinMileageFilter,
  changeMaxMileageFilter,
  setSearchTrigger,
} from "../../redux/filters/filtersSlice";
import { getBrands } from "../../redux/filters/filtersOperations";
import {
  selectBrand,
  selectBrands,
  selectPrice,
  selectFormattedMinMileage,
  selectFormattedMaxMileage,
} from "../../redux/filters/filtersSelectors";
import { selectUniqueRentalPrices } from "../../redux/cars/carsSelectors.js";
import css from "./Filters.module.css";
import { nanoid } from "nanoid";

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
  const minMileage = useSelector(selectFormattedMinMileage);
  const maxMileage = useSelector(selectFormattedMaxMileage);
  const brandsWithId = useMemo(
    () => brands.map((item) => ({ id: nanoid(), value: item })),
    [brands]
  );
  const uniquePrices = useSelector(selectUniqueRentalPrices);

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
    const raw = filterValue.replace(/\s/g, "");
    if (/^\d*$/.test(raw)) {
      dispatch(changeMinMileageFilter(raw));
    }
  };
  const handleMaxMileageChange = (e) => {
    const filterValue = e.target.value;
    const raw = filterValue.replace(/\s/g, "");
    if (/^\d*$/.test(raw)) {
      dispatch(changeMaxMileageFilter(raw));
    }
  };
  return (
    <>
      <div className={`${css.filtersContainer}`}>
        <div className={css.filtersRow}>
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
              <div className={css.mileageFiltersInputWrapper}>
                <input
                  className={css.mileageFilterMin}
                  type="text"
                  name="minMileage"
                  placeholder="From"
                  value={
                    minMileage !== null && minMileage !== undefined
                      ? minMileage
                      : ""
                  }
                  onChange={handleMinMileageChange}
                />
                <input
                  className={css.mileageFilterMax}
                  type="text"
                  name="maxMileage"
                  placeholder="To"
                  value={
                    maxMileage !== null && maxMileage !== undefined
                      ? maxMileage
                      : ""
                  }
                  onChange={handleMaxMileageChange}
                />
              </div>
            </fieldset>

            <button className={css.filtersSubmitBtn} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
