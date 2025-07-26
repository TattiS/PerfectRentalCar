import axiosInstance from "./axiosInstance";

export const fetchCars = async ({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  limit = 12,
  page = 1,
} = {}) => {
  const params = {};

  if (brand) params.brand = brand;
  if (rentalPrice) params.rentalPrice = rentalPrice;
  if (minMileage) params.minMileage = minMileage;
  if (maxMileage) params.maxMileage = maxMileage;
  params.limit = limit;
  params.page = page;

  const { data } = await axiosInstance.get("/cars", { params });
  console.log(data);
  return data;
};

export const fetchCarById = async (id) => {
  const { data } = await axiosInstance.get(`/cars/${id}`);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await axiosInstance.get("/brands");
  return data;
};
