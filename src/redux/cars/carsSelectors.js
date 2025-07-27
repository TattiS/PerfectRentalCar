import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectTotalCars = (state) => state.cars.totalCars;
export const selectHasMore = (state) => state.cars.hasMore;

export const selectUniqueRentalPrices = createSelector([selectCars], (cars) => {
  if (!cars || cars.length === 0) return ["30", "40", "50", "60", "70", "80"];

  return Array.from(new Set(cars.map((car) => car.rentalPrice))).sort(
    (a, b) => a - b
  );
});
export const selectCarsError = (state) => state.cars.error;
export const selectCarsLoading = (state) => state.cars.isLoading;
export const selectCarById = (state, carId) => {
  return state.cars.items.find((car) => car.id === carId);
};
