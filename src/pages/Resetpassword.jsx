import { Lock } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Emailconfirmation() {
  const navigate = useNavigate()
  
  
    return (
      <div>
        <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-2xl bg-white shadow-md border rounded-lg overflow-hidden">
        {/* Lado esquerdo */}
        <div className="hidden md:block md:w-1/2 bg-gray-300 p-4"></div>

        {/* Lado direito - Formulário */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
          <img src="/icon.png" alt="Register Icon" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Reset password</h2>

          <div className="-ml-24 font-semibold mb-4">
            <p className="">Enter your new password</p>
          </div>

          <div className="w-full flex items-center border rounded mb-3 p-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input type="email" placeholder="Password" className="w-full focus:outline-none" />
          </div>

          <button className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700">
            Send
          </button>

          <p className="text-sm mt-4 font-semibold">
            An problem ? <span className="text-red-500 cursor-pointer hover:underline" onClick={() => navigate("/emailconfirmation")}>
              Try again
            </span>
          </p>
        </div>
      </div>
    </div>
      </div>
    )
  
  }
  
  export default Emailconfirmation
  