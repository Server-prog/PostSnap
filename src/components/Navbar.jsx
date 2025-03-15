import React from "react";
import { Search, Bell, Users, Home, UserCircle, Grid, MessageCircle } from "lucide-react";

function Navbar() {
  return (
    <nav className="p-4 flex items-center bg-white h-[70px] justify-center shadow-md">
      <div className="flex items-center justify-between px-4 py-2 w-[1200px] max-w-full">
        <div className="flex items-center space-x-2">
          <img src="src/assets/react.svg" alt="logo" className="w-8 h-8" />
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full w-[250px]">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Pesquisar no SnapPost"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full ml-2"
            />
          </div>
        </div>

        <div className="flex space-x-6">
          <Home className="w-6 h-6 text-blue-600 cursor-pointer" />
          <Users className="w-6 h-6 text-gray-600 cursor-pointer" />
          <UserCircle className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>

        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 p-2 rounded-full">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <Grid className="w-5 h-5 text-gray-600" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full relative">
            <MessageCircle className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </button>
          <button className="bg-gray-200 p-2 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
          <img src="src/assets/Joao.jpg" alt="perfil" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
