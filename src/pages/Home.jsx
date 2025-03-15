import React from "react";

function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="flex">
        <aside className="w-1/5 bg-[#8FA6B3] border rounded-md p-4 min-h-screen">
          <div className="text-center mb-4">
            <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto"></div>
            <h2 className="mt-2 text-lg">João Tanbue</h2>
            <p className="text-sm text-gray-400">joaotanbue13@gmail.com</p>
          </div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Sobre</li>
            <li>Acessibilidade</li>
            <li>Ajuda</li>
            <li>Termos e privacidade</li>
          </ul>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex flex-col">
            <section className="mb-4 flex justify-center">
              <div className="flex space-x-2 overflow-x-auto">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-16 h-16 bg-gray-600 rounded-full border-2 border-green-400"></div>
                ))}
              </div>
            </section>
            <section>
              <div className="bg-[#8FA6B3] p-4 mt-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                  <div>
                  <p>João Tanbue</p>
                  <p className="text-sm text-black">há 15 minutos</p>
                  </div>
                  
                </div>
                <p className="mt-2 text-gray-300">Mais um post exclusivo...</p>
              </div>
            </section>
          </div>
        </main>
        <aside className="w-1/5 bg-[#8FA6B3] border rounded-lg p-4 min-h-screen">
          <h3 className="text-lg mb-4 flex justify-center">Weekly Activity</h3>
          <div className="bg-gray-300 p-3 rounded-lg flex flex-col space-y-2 w-full">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt=""  className="w-8 h-8 bg-white rounded-full border" />
                <p className="text-sm text-black">
                  <strong>David Armando</strong> reagiu na tua publicação
                </p>
            </div>
            <div className="flex justify-between items-center border rounded-lg h-10 bg-white px-2">
              <p className="text-black text-sm">
                Mais um projeto atual
              </p>
                <button className="h-8 bg-green-500 text-white px-3 rounded">
                  Ver
                </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
