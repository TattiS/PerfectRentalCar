export const selectBrands = (state) => state.filters.brands || [];

export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.rentalPrice;
export const selectMinMileage = (state) => state.filters.minMileage;
export const selectMaxMileage = (state) => state.filters.maxMileage;
export const selectSearchTrigger = (state) => state.filters.searchTrigger;
export const selectFormattedMinMileage = (state) => {
  const raw = state.filters.minMileage;
  if (!raw) return "";
  return Number(raw).toLocaleString("uk-UA");
};
export const selectFormattedMaxMileage = (state) => {
  const raw = state.filters.maxMileage;
  if (!raw) return "";
  return raw.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
