import { generateThunk } from "../utils/generateThunk.js";
import { fetchCars } from "../../services/api.js";

export const getCars = generateThunk("cars/getCars", (filters = {}) =>
  fetchCars(filters)
);
