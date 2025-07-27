import { generateThunk } from "../utils/generateThunk.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "../../services/api.js";
import { setSearchTrigger } from "../filters/filtersSlice.js";

export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const brand = state.filters.brand;
    const rentalPrice = state.filters.rentalPrice;
    const minMileage = state.filters.minMileage;
    const maxMileage = state.filters.maxMileage;
    const page = state.cars.page;

    const filters = {
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
      page,
    };

    return fetchCars(filters);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || "Unknown error");
  } finally {
    thunkAPI.dispatch(setSearchTrigger(false));
  }
});

export const getCarById = generateThunk("cars/getCarById", (id) => {
  return fetchCarById(id);
});
