import React from "react";
import { Search, Settings, Bell, Users, Home, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
          <Search className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <Home className="w-6 h-6 text-white cursor-pointer" />
        <Users className="w-6 h-6 text-white cursor-pointer" />
        <Bell className="w-6 h-6 text-white cursor-pointer" />
        <Settings className="w-5 h-5 text-white" />
      </div>
      <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg cursor-pointer space-x-2">
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        <span className="text-white">João Tanbue</span>
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </nav>
  );
}

export default Navbar;