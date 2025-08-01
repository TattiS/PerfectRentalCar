import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./filtersOperations";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
  searchTrigger: false,
  brands: [],
  loading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeBrandFilter: (state, action) => {
      state.brand = action.payload;
    },
    changePriceFilter: (state, action) => {
      state.rentalPrice = action.payload;
    },
    changeMinMileageFilter: (state, action) => {
      state.minMileage = action.payload;
    },
    changeMaxMileageFilter: (state, action) => {
      state.maxMileage = action.payload;
    },
    resetFilters: (state) => {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = "";
      state.maxMileage = "";
      state.error = null;
      state.loading = false;
    },
    resetBrands(state) {
      state.brands = [];
      state.error = null;
    },
    setSearchTrigger(state, action) {
      state.searchTrigger = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  changeBrandFilter,
  changePriceFilter,
  changeMinMileageFilter,
  changeMaxMileageFilter,
  resetBrands,
  resetFilters,
  setSearchTrigger,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
