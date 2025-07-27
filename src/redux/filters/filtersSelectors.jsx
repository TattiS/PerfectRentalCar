export const selectBrands = (state) => state.filters.brands || [];

export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.rentalPrice;
export const selectMinMileage = (state) => state.filters.minMileage;
export const selectMaxMileage = (state) => state.filters.maxMileage;
export const selectSearchTrigger = (state) => state.filters.searchTrigger;
