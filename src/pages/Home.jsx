{/*

import React, { useState, useEffect } from "react";
import PostModal from "../components/PostModal";
import { fetchPosts } from "../service/postService"; 
import { Users, BadgeCheck, Video, Bookmark, Calendar, Gamepad2, BarChart, MoreHorizontal, Heart, MessageCircle } from "lucide-react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para carregar posts da API
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao carregar postagens:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Função para adicionar um novo post na lista
  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Adiciona o novo post no topo
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-[1200px] max-w-full flex gap-4 py-4">
        {/* Sidebar Esquerda */}
        <aside className="w-[280px] p-4 rounded-lg shadow sticky top-4 h-[calc(100vh-32px)]">
          <div className="flex items-center space-x-2">
            <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
            <span className="font-semibold">João Tambue</span>
          </div>
        </aside>

        {/* Conteúdo Principal *
        <main className="flex-1 overflow-y-auto h-screen px-4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <h1
                className="w-full bg-gray-100 rounded-full px-4 py-2 cursor-pointer text-gray-500"
                onClick={() => setIsModalOpen(true)}
              >
                Today is a good day to share some news!
              </h1>
            </div>
          </div>

          {/* 🚀 Exibição das Postagens 🚀 *
          {loading ? (
            <p className="text-center">Carregando posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center">Nenhuma postagem encontrada.</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex items-center space-x-3">
                  <img src="src/assets/Joao.jpg" alt="perfil" className="w-14 h-14 rounded-full border-2 border-gray-300" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-lg">{post.username || "Usuário"}</p>
                      <BadgeCheck className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-md">{post.content}</p>
                {post.img_url && (
                  <div className="mt-3 border-t border-b border-black py-2 flex items-center justify-between">
                    <img src={post.img_url} alt="Post" className="w-full rounded-lg" />
                  </div>
                )}
                <div className="flex items-center justify-between space-x-2 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-gray-600" />
                    <p>Gosto</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <p>Comment</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bookmark className="w-5 h-5 text-gray-600" />
                    <p>Save</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {/* Modal de Postagem *
      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} addNewPost={addNewPost} />}
    </div>
  );
};

export default Home;


*/}








  import React, { useState, useEffect } from "react";
import PostModal from "../components/PostModal";
import { fetchPosts } from "../service/postService"; // Importando fetchPosts()
import { Users, BadgeCheck, Video, Bookmark, Calendar, Gamepad2, BarChart, MoreHorizontal, Heart, MessageCircle } from "lucide-react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao carregar postagens:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

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
              <span>Friends</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Video className="w-5 h-5 text-red-500" />
              <span>Vídeo</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Bookmark className="w-5 h-5 text-purple-500" />
              <span>Saved</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Calendar className="w-5 h-5 text-yellow-500" />
              <span>Events</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <BarChart className="w-5 h-5 text-green-500" />
              <span>Statistics</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <Gamepad2 className="w-5 h-5 text-indigo-500" />
              <span>Play games</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
              <span>See more</span>
            </li>
          </ul>
        </aside>

        <main className="flex-1 overflow-y-auto h-screen px-4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
              <h1
                className="w-full bg-gray-100 rounded-full px-4 py-2 cursor-pointer text-gray-500"
                onClick={() => setIsModalOpen(true)}
              >
                Today is a good day to share some news!
              </h1>
            </div>
            <div className="flex justify-around mt-4 text-gray-600">
              <button className="flex items-center space-x-1 text-red-500">
                <Video className="w-5 h-5" />
                <span>Live video</span>
              </button>
              <button className="flex items-center space-x-1 text-green-500">
                <Users className="w-5 h-5" />
                <span>Photo/video</span>
              </button>
            </div>
          </div>

          {loading ? (
            <p className="text-center">Carregando posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center">Nenhuma postagem encontrada.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="src/assets/Joao.jpg"
                    alt="perfil"
                    className="w-14 h-14 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-lg">{post.username || "Usuário"}</p>
                      <BadgeCheck className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-md">{post.content}</p>
                {post.img_url && (
                  <div className="mt-3 border-t border-b border-black py-2 flex items-center justify-between">
                    <img src={post.img_url} alt="Post" className="w-full rounded-lg" />
                  </div>
                )}
                <div className="flex items-center justify-between space-x-2 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-gray-600" />
                    <p>Gosto</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <p>Comment</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bookmark className="w-5 h-5 text-gray-600" />
                    <p>Save</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </main>

        <aside className="w-1/5 border rounded-lg p-4 min-h-screen">
          <h3 className="flex justify-center text-lg mb-4">Weekly Activity</h3>
          <div className="border border-black p-3 rounded-md mb-2">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full mr-2" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Top Head Community</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white border rounded-lg mt-2">
              <span className="text-xs flex justify-center ml-2 text-gray-400">August 23 at 6:30pm</span>
                <button className="bg-blue-400 text-black px-3 py-1 text-sm rounded">Check</button>
            </div>
          </div>
          <div className="border border-black p-3 rounded-md mb-2">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full mr-2" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Top Head</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white border rounded-lg mt-2">
              <span className="text-xs flex justify-center ml-2 text-gray-400">August 23 at 6:30pm</span>
                <button className="bg-blue-400 text-black px-3 py-1 text-sm rounded">Check</button>
            </div>
          </div>
          <div className="border border-black p-3 rounded-md mb-2">
            <div className="flex items-center space-x-2">
              <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full mr-2" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Impruvement Lab</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white border rounded-lg mt-2">
              <span className="text-xs flex justify-center ml-2 text-gray-400">August 23 at 6:30pm</span>
                <button className="bg-blue-400 text-black px-3 py-1 text-sm rounded">Check</button>
            </div>
          </div>
        </aside> 


      </div>

      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;


