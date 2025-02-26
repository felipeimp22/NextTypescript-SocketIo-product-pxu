import api from "./api";

export const me = async () => {
  try {
    const response = await api.get(
      `/user/me`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting my informations: ", error);
    throw error;
  }
};