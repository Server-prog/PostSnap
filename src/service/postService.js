import api from "./api";

export const createPost = async (imageFile, content) => {
  try {
    const token = localStorage.getItem("token"); // Pegar token salvo no login
    if (!token) throw new Error("Usuário não autenticado!");

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("content", content);

    const response = await api.post("/add_post", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || "Erro ao criar postagem.";
  }
};

// ✅ Nova função para buscar postagens
export const fetchPosts = async () => {
  try {
    const response = await api.get("/posts"); // Confirme se a rota correta é "/posts"
    return response.data;
  } catch (error) {
    throw error.response?.data || "Erro ao buscar postagens.";
  }
};
