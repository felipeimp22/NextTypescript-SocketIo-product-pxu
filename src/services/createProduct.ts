import api from "./api";

export const createProduct = async (
  title: string,
  price: number,
  inventory: number
) => {
  try {
    const response = await api.post("/product", {
      title,
      price,
      inventory
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product: ", error);
    throw error;
  }
};

