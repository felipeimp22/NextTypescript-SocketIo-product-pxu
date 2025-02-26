import api from "./api";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
export const purchase = async (items: Array<CartItem>) => {
  try {
    const response = await api.post("/product/buy", JSON.stringify(
      items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }))
    ));
    return response.data;
  } catch (error) {
    console.error("Error to purchase: ", error);
    throw error;
  }
};