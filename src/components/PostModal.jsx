import { X, Lock, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

function PostModal({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("public");
  const [images, setImages] = useState([]);

  const previewImages = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = function (e) {
        newImages.push(e.target.result);
        if (newImages.length === files.length) {
          setImages((prev) => [...prev, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 border rounded-lg border-black w-[500px]">
        <div className="flex justify-between items-center border-b border-black pb-2">
          <h2 className="text-lg font-bold">Create a new post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>
          <div className="flex items-center space-x-2 mt-2">
            <img src="src/assets/Joao.jpg" alt="perfil" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold">João Tambue</span>
              <div className="relative bg-[#D9D9D9] text-black rounded-full p-1 text-xs flex items-center cursor-pointer">
                {selectedOption === "public" ? (
                  <Globe className="w-4 h-4 text-black ml-2" />
                  ) : (
                  <Lock className="w-4 h-4 text-black ml-2" />
                )}
                <span className="ml-2">{selectedOption === "public" ? "Pública" : "Privada"}</span>
                <ChevronDown className="w-4 h-4 text-black ml-auto mr-2" />
                <select className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
                  <option value="public">Pública</option>
                  <option value="private">Privada</option>
                </select>
              </div>
            </div>
          </div>
        <textarea
          className="w-full mt-4 p-2 border bg-[#D9D9D9] rounded-lg border-black"
          placeholder="Escreva algo..."
        />
        {!images.length && (
          <div className="w-full max-w-md mx-auto gap-2 mt-4">
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-100 hover:border-blue-500 hover:bg-gray-200"
            >
              <div className="flex flex-col items-center justify-center p-4">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l3-3 4 4 5-5M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="text-gray-600">Add photo</p>
                <p className="text-sm text-gray-500">Or drag and drop</p>
              </div>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={previewImages}
              />
            </label>
          </div>
        )}
        <div id="image-preview" className="mt-4 grid grid-cols-3 gap-2">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img src={src} className="w-24 h-24 object-cover rounded-lg" alt="Preview" />
              <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                onClick={() => removeImage(index)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-2 w-full bg-blue-500 text-black rounded-md p-2">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostModal;