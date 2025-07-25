import { createAsyncThunk } from "@reduxjs/toolkit";

export const genericErrorMessage =
  "There was an error. Please try again a bit later.";

export const generateThunk = (name, requestFunc) => {
  return createAsyncThunk(name, async (arg, thunkAPI) => {
    try {
      const response = await requestFunc(arg);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || genericErrorMessage
      );
    }
  });
};
