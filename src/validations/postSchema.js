import { z } from "zod";

export const postSchema = z.object({
  image: z.any().refine((file) => file.length > 0, "A imagem é obrigatória!"),
  content: z.string().min(3, "O conteúdo precisa ter pelo menos 3 caracteres"),
});
