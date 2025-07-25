import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;

export const selectUniqueRentalPrices = createSelector([selectCars], (cars) => {
  if (!cars || cars.length === 0) return ["30", "40", "50", "80"];

  return Array.from(new Set(cars.map((car) => car.rentalPrice))).sort(
    (a, b) => a - b
  );
});
