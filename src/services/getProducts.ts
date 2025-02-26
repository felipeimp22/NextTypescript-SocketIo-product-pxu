import api from "./api";

export const getProducts = async (
  pageNumber: number,
  itemsPerPage: number,
  filterValue="",
  date: string,
  inventory: string
) => {
  try {
    const encodedFilter = encodeURIComponent(filterValue);
    const response = await api.get(
      `/product?page=${pageNumber}&limit=${itemsPerPage}&filter=${encodedFilter}&date=${date}&inventory=${inventory}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw error;
  }
};
