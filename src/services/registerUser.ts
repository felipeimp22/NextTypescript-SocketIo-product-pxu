import api from "./api";

export const registerUser = async (
  email: string,
  password: string,
) => {
  try {
    const response = await api.post("/auth/register", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
