import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
