import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../index.css"; // Import the custom CSS file if needed

const ShareWork = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
    ],
  };

  const [image, setImage] = useState<string | null>(null);
  const [Title, setTitle] = useState("");
  const [Genres, setGenres] = useState("");
  const [Description, setDescription] = useState("");
  const [base64, setBase64] = useState<string>("");

  const handleNext = () => {
    // Your handleNext function logic here
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        setBase64(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-3 px-10">
      <div className="bg-white rounded-3xl grid place-items-center">
        <h1 className="pt-10 pr-[550px]">SHARE YOUR WORK</h1>
        <form action="" className="flex py-10 space-x-8 px-8">
          <div className="flex flex-col items-center">
            <label htmlFor="file-upload">
              <img
                src={image || "https://via.placeholder.com/300x200"}
                alt="Upload Placeholder"
                className="w-80 h-[500px] object-cover text-center bg-gray-400 cursor-pointer"
              />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <div className="border border-black w-[400px] px-10 pt-5">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded-2xl w-[300px] py-2 px-3 mb-2 kobus:w-[700px] border-black"
                placeholder=""
                required
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Genres</label>
              <input
                type="text"
                id="genres"
                name="genres"
                className="border rounded-2xl w-[300px] py-2 px-3 mb-2 kobus:w-[700px] border-black"
                placeholder=""
                required
                value={Genres}
                onChange={(e) => setGenres(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <div className="border border-black rounded-2xl w-[300px] h-52 kobus:w-[700px]">
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={Description}
                  onChange={setDescription}
                  className="custom-quill h-full"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="pb-3">
          <Link to={"preview"}>
            <Button name="Next" buttonFunction={handleNext} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShareWork;
