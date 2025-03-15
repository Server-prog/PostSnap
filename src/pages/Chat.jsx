import React from "react";
import { Search, Settings, UserCircle, MoreVertical, Lock, Bell, User, MessageCircle } from "lucide-react";

function Chat () {	

    return (
        <div className="flex h-[539px] bg-gray-100 w-[1200px] mx-auto">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 border-r">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Conversations</h2>
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search SnapPost"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <div>
        <ul>
          <li className="p-2 flex items-center space-x-3 hover:bg-gray-200 rounded cursor-pointer">
            <img
              src="src/assets/David.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">David Armando</p>
              <p className="text-xs text-gray-500">Tas bom cassule?</p>
            </div>
          </li>
        </ul>
        
            <ul>
                <li className="p-2 flex items-center space-x-3 hover:bg-gray-200 rounded cursor-pointer">
                    <img src="src/assets/Omar.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold">Omar Rodrigues</p>
                        <p className="text-xs text-black font-bold">Wi me da ainda 100.</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li className="p-2 flex items-center space-x-3 hover:bg-gray-200 rounded cursor-pointer">
                    <img src="src/assets/Mbala.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold">Domingos Mbala</p>
                        <p className="text-xs text-black font-bold">Tens 10kz aí ?</p>
                    </div>
                </li>
            </ul>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="p-4 border-b bg-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="src/assets/David.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <p className="font-semibold">David Armando</p>
          </div>
          <div className="flex space-x-3">
            <MessageCircle className="w-5 h-5 cursor-pointer" />
            <Bell className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
          </div>
        </header>
        <div className="flex-1 p-4 bg-gray-200 overflow-y-auto">
          <div className="flex justify-start mb-4 gap-2">
          <img
              src="src/assets/David.jpg"
              alt="avatar"
              className="w-7 h-7 rounded-full"
            />
            <p className="bg-white p-2 rounded-lg shadow">Mekie mano ?</p>
          </div>
          <div className="flex justify-end mb-4 gap-2">
            <p className="bg-blue-500 text-white p-2 rounded-lg shadow">Tas bom cassule?</p>
            <img
              src="src/assets/joao.jpg"
              alt="avatar"
              className="w-7 h-7 rounded-full"
            />
          </div>
        </div>
        <footer className="p-4 border-t bg-white flex items-center">
          <input
            type="text"
            placeholder="Aa"
            className="flex-1 border rounded-full px-4 py-2 gap-2"
          />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full gap-2 ml-2">
                Send
            </button>
        </footer>
      </main>

      {/* User Info Panel */}
      <aside className="w-1/4 p-4 bg-white border-l">
        <div className="flex justify-center space-x-3 mb-4">
            <div className="space-x-3 mb-4">
                <div className="flex justify-center">
                    <img src="src/assets/David.jpg" alt="avatar" className="w-32 h-32 rounded-full" />
                </div>
                <p className="font-semibold mt-2">David Armando</p>
            </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-lg">
          <Lock className="w-4 h-4 text-gray-600" />
          <p className="text-xs text-gray-600">Encriptação ponto a ponto</p>
        </div>
        <div className="flex justify-center mt-4 space-x-6">
            <div className="flex flex-col items-center">
                <UserCircle className="w-6 h-6 text-gray-600 cursor-pointer" />
                <span className=" text-black " >Perfil</span>
            </div>
            <div className="flex flex-col items-center">
                <Settings className="w-6 h-6 text-gray-600 cursor-pointer" />
                <span className=" text-black " >Setting</span>
            </div>
        </div>
        <div className="flex items-center bg-white border rounded-lg mt-4">
            <span className="text-xs flex justify-center ml-2 text-gray-400">August 23 at 6:30pm</span>
            <div className="ml-20" >
                <button className="bg-blue-400 text-black px-3 py-1 text-sm rounded">Check</button>
            </div>
        </div>
      </aside>
    </div>
    );
}

export default Chat;