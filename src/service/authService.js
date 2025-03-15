import api from "./api";

export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post("/register", {
      username: name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || "Erro ao registrar usuário.";
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });

    const token = response.data.access_token;
    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw error.response?.data || "Erro ao fazer login.";
  }
};

export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get("/protected", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || "Erro ao buscar dados protegidos.";
  }
};
