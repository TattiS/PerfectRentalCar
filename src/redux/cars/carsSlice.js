import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./carsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 0,
  totalCars: 0,
  hasMore: true,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.totalPages = 0;
      state.totalCars = 0;
      state.hasMore = true;
      state.error = null;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        if (action.payload.totalPages === state.page) {
          state.hasMore = false;
        }
        state.items.push(...action.payload.cars);
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
        state.isLoading = false;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
