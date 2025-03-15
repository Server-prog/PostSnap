import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validations/loginSchema";
import { loginUser } from "../service/authService";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await loginUser(data.email, data.password);
      alert("Login bem-sucedido!");
      navigate("/home"); // Redireciona após o login
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-2xl bg-white shadow-md border rounded-lg overflow-hidden">
        {/* Lado esquerdo */}
        <div className="hidden md:block md:w-1/2 bg-gray-300 p-4"></div>

        {/* Lado direito - Formulário */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
          <img src="/icon.png" alt="Login Icon" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Login</h2>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
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

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Log In"}
            </button>
          </form>

          {/* Link para Registro */}
          <p className="text-sm mt-4 font-semibold">
            Don't have an account?{" "}
            <span
              className="text-red-500 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
