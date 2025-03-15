import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../validations/signUpSchema";
import { registerUser } from "../service/authService"; // Corrigido caminho

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log("🚀 Dados enviados:", data); // Debug

    try {
      setLoading(true);
      const response = await registerUser(data.name, data.email, data.password);
      console.log("✅ Resposta da API:", response);

      alert("Usuário registrado com sucesso!");
      navigate("/login"); // Redireciona para login após sucesso
    } catch (error) {
      console.error("❌ Erro no registro:", error);
      alert(error.message || JSON.stringify(error)); // Melhor feedback do erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-2xl bg-white shadow-md border rounded-lg overflow-hidden">
        
        <div className="hidden md:block md:w-1/2 bg-gray-300 p-4"></div>

        <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
          <img src="/icon.png" alt="Register Icon" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            {/* Nome */}
            <div>
              <div className="flex items-center border rounded p-2">
                <User className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  className="w-full focus:outline-none"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* E-mail */}
            <div>
              <div className="flex items-center border rounded p-2">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="E-mail"
                  className="w-full focus:outline-none"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Senha */}
            <div>
              <div className="flex items-center border rounded p-2">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="w-full focus:outline-none"
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Confirmação de Senha */}
            <div>
              <div className="flex items-center border rounded p-2">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="Confirm Password"
                  className="w-full focus:outline-none"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Botão de Cadastro */}
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
              disabled={loading}
            >
              {loading ? "Cadastrando..." : "Create"}
            </button>
          </form>

          {/* Link para Login */}
          <p className="text-sm mt-4 font-semibold">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
