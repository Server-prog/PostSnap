import { z } from 'zod';

export const signUpSchema = z.object ({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email( "E-mail inválido" ),
    password: z.string().min(6, "A senha precisa de ter no mínimo 6 caracteres" ),
})
.refine(data => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmpassword"],
});