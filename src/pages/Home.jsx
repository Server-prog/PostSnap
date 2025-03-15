import React from "react";
import { Users, Video, Bookmark, Calendar, Gamepad2, BarChart, MoreHorizontal, Heart, MessageCircle } from "lucide-react";

function Home() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-[1200px] max-w-full flex gap-4 py-4">
        <aside className="w-[280px] p-4 rounded-lg shadow sticky top-4 h-[calc(100vh-32px)]">
          <div className="flex items-center space-x-2">
            <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
            <span className="font-semibold">João Tambue</span>
          </div>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Users className="w-5 h-5 text-blue-500" />
              <span>Amigos</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Video className="w-5 h-5 text-red-500" />
              <span>Vídeo</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Bookmark className="w-5 h-5 text-purple-500" />
              <span>Guardados</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Calendar className="w-5 h-5 text-yellow-500" />
              <span>Eventos</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <BarChart className="w-5 h-5 text-green-500" />
              <span>Gestor de Anúncios</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Gamepad2 className="w-5 h-5 text-indigo-500" />
              <span>Jogar jogos</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
              <span>Ver mais</span>
            </li>
          </ul>
        </aside>

        <main className="flex-1 overflow-y-auto h-screen px-4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <input
                type="text"
                placeholder="Hoje é um bom dia para partilhares alguma novidade !"
                className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none"
              />
            </div>
            <div className="flex justify-around mt-4 text-gray-600">
              <button className="flex items-center space-x-1 text-red-500">
                <Video className="w-5 h-5" />
                <span>Vídeo em direto</span>
              </button>
              <button className="flex items-center space-x-1 text-green-500">
                <Users className="w-5 h-5" />
                <span>Foto/vídeo</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-3">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-14 h-14 rounded-full border-2 border-gray-300" />
              <div>
                <p className="font-semibold text-lg">New Alberth</p>
                <span className="text-sm text-gray-500">5h</span>
              </div>
            </div>
            <p className="mt-2 text-md">👋 melhorando a cada dia ✨</p>
            <div className="mt-3 border-t border-b border-black py-2 flex items-center justify-between">
              <img src="src/assets/todo.png" alt="foto de perfil" className="w-full rounded-lg" />
            </div>
            <div className="flex items-center justify-between space-x-2 mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-gray-600" />
                <p> Gosto</p>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-gray-600" />
                <p> Gosto</p>
              </div>
              <div className="flex items-center space-x-2">
                <Bookmark className="w-5 h-5 text-gray-600" />
                <p> Save</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Mia's Code</p>
                <span className="text-sm text-gray-500">3d</span>
              </div>
            </div>
            <p className="mt-2">🚀 Trabalhando em um novo projeto com React!</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Mia's Code</p>
                 <span className="text-sm text-gray-500">3d</span>
              </div>
            </div>
            <p className="mt-2">🚀 Trabalhando em um novo projeto com React!</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Mia's Code</p>
                <span className="text-sm text-gray-500">3d</span>
              </div>
            </div>
            <p className="mt-2">🚀 Trabalhando em um novo projeto com React!</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Mia's Code</p>                  <span className="text-sm text-gray-500">3d</span>
              </div>
            </div>
            <p className="mt-2">🚀 Trabalhando em um novo projeto com React!</p>
          </div>
        </main>

        <aside className="w-[280px] p-4 rounded-lg shadow sticky top-4 h-[calc(100vh-32px)]">
          <h2 className="font-semibold">Pedidos de amizade</h2>
          <div className="flex items-center space-x-2 mt-2">
            <img src="src/assets/avatar.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Joséfina Morais</p>
              <span className="text-sm text-gray-500">1 amigo em comum</span>
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="flex-1 bg-blue-500 text-white py-1 rounded">Confirmar</button>
            <button className="flex-1 bg-gray-300 text-black py-1 rounded">Eliminar</button>
          </div>

          <h2 className="font-semibold mt-4">Contactos</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-8 h-8 rounded-full" />
              <span>José Dias</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-8 h-8 rounded-full" />
              <span>Gelson Antonio</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="src/assets/avatar.jpg" alt="perfil" className="w-8 h-8 rounded-full" />
              <span>Omar Rodrigues</span>
            </li>
          </ul>
        </aside>

      </div>
    </div>
  );
}

export default Home;
