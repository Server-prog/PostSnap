function Drawer() {
  return (

    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-2xl bg-white shadow-md border rounded-lg overflow-hidden">
        <h1>Modal aberto</h1>
        <p>Adiciona uma nova publicação</p>
        <button>fechar modal</button>
      </div>
    </div>
    
  );
}

export default Drawer;