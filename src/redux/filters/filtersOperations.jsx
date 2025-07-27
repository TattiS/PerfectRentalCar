import { generateThunk } from "../utils/generateThunk";
import { fetchBrands } from "../../services/api";

export const getBrands = generateThunk("filters/getBrands", fetchBrands);
