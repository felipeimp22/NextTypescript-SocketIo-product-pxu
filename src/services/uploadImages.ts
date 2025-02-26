import api from "./api";

export const uploadImages = async (
  productId: string,
  formData: FormData 
) => {
  try {
    const response = await api.post(`/product/${productId}/upload`, 
      formData, {
        headers:{
        "Content-Type": "multipart/form-data",
      }}
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};
