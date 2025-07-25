import { generateThunk } from "../utils/generateThunk.js";
import { fetchCarById, fetchCars } from "../../services/api.js";

export const getCars = generateThunk("cars/getCars", (filters = {}) =>
  fetchCars(filters)
);

export const getCarById = generateThunk("cars/getCarById", (id) =>
  fetchCarById(id)
);
