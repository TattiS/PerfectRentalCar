import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./carOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  hasMore: true,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
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
        if (action.payload.length === 0) {
          state.hasMore = false;
        }
        state.items.push(...action.payload);
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
