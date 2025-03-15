import { User, Mail, Lock} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-2xl bg-white shadow-md border rounded-lg overflow-hidden">
        {/* Lado esquerdo */}
        <div className="hidden md:block md:w-1/2 bg-gray-300 p-4"></div>

        {/* Lado direito - Formulário */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
          <img src="/icon.png" alt="Register Icon" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>

          <div className="w-full flex items-center border rounded mb-3 p-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input type="text" placeholder="Name" className="w-full focus:outline-none" />
          </div>

          <div className="w-full flex items-center border rounded mb-3 p-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input type="password" placeholder="Password" className="w-full focus:outline-none" />
          </div>

          <button className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700">
            Log In
          </button>

          <p className="text-sm mt-4 font-semibold">
            Don't have an account? <span className="text-red-500 cursor-pointer underline" onClick={() => navigate("/")}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
