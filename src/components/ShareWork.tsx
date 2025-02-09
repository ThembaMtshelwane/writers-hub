import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../index.css";
import axios from "axios";
import { IGenre } from "../types";

const ShareWork = () => {
  const modules = {
    toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"]],
  };

  const [image, setImage] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [Genres, setGenres] = useState<IGenre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [Description, setDescription] = useState<string>("");
  const [base64, setBase64] = useState<string>("");
  const [Type, setType] = useState<string>("");
  const textRef = useRef<ReactQuill>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await axios.get("/api/genres");
        setGenres(data);
        if (data.length > 0 && !selectedGenre) {
          setSelectedGenre(data[0].name);
        }
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchContent();
  }, [selectedGenre]);

  // console.log("data  ", data);
  // console.log("content  ", content);

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

  const handleNext = () => {
    const qui = textRef.current?.getEditor();
    const text = qui?.getText();
    const formData = {
      Title,
      selectedGenre,
      Type: Type,
      Description: text,
      image,
      base64,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("write", { state: formData });
  };

  return (
    <section className="py-3 px-3 grid place-items-center">
      <div className="bg-white rounded-3xl grid px-4 xl:px-6  md:h-[840px] 2xl:h-[600px] md:w-[650px] w-[260px] lg:w-[600px] lg:h-[640px] lg:space-y-1 pc:w-[1200px] pc:h-[750px] xl:w-[850px] xl:h-[770px] big-screen:w-[1300px] big-screen:h-[950px]">
        <h1 className="pt-10 text-sm xl:text-xl md:pt-3">SHARE YOUR WORK</h1>
        <form className="grid grid-cols-1 py-10 2xl:py-5 space-y-3 md:grid-cols-1 pc:px-10 md:space-y-5 lg:grid-cols-2 md:place-content-center md:place-items-center ">
          <div className="flex flex-col ">
            <label htmlFor="file-upload">
              <img
                src={image || "https://via.placeholder.com/300x200"}
                alt="Upload Placeholder"
                className="w-56 h-[100px] object-cover text-center bg-gray-400 cursor-pointer md:h-[230px] md:w-[400px] lg:w-[250px] lg:h-[450px]  xl:w-[350px] pc:h-[540px] pc:w-[500px] 2xl:h-[460px]"
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
          <div className="border border-black w-[230px] md:w-[400px]  md:px-5 md:h-[430px] md:text-sm px-3 pt-5 lg:w-[290px] lg:px-3 xl:w-[400px] xl:px-5 2xl:w-[400px] 2xl:h-[440px] 2xl:px-10 pc:h-[530px] pc:w-[450px] pc:px-6 big-screen:w-[500px]">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded-2xl w-[200px] lg:w-[270px] pc:w-[400px] xl:w-[350px] py-2 px-3 mb-2 kobus:w-[700px] border-black 2xl:w-[300px] md:w-[350px] big-screen:w-[450px]"
                placeholder=""
                required
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Genres
              </label>
              <select
                id="genres"
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="border rounded-2xl w-[200px] pc:w-[400px] lg:w-[270px] xl:w-[350px] py-2 px-3 mb-2 kobus:w-[700px] border-black 2xl:w-[300px] md:w-[350px] big-screen:w-[450px]"
                required
              >
                <option value="" disabled>
                  Select Genre
                </option>
                {Genres.map((genre) => (
                  <option key={genre._id} value={genre.name}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pb-6 space-y-2">
              <h1 className="text-sm">Type</h1>
              <div className="flex space-x-4">
                {["Poem", "Short story", "Long-form"].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`${type}-radio`}
                      type="radio"
                      name="type"
                      value={type}
                      checked={Type === type}
                      onChange={(e) => setType(e.target.value)}
                      className={`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 ${
                        Type === type ? "bg-green-500" : "bg-gray-100"
                      }`}
                    />
                    <label
                      htmlFor={`${type}-radio`}
                      className="ms-2 text-sm font-medium text-black"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <div className="border border-black w-[200px] lg:w-[270px] pc:w-[400px] pc:h-[180px] xl:w-[350px] h-52 kobus:w-[700px] 2xl:w-[300px] 2xl:h-[130px] md:w-[350px] md:h-[100px] big-screen:w-[450px]">
                <ReactQuill
                  ref={textRef}
                  modules={modules}
                  theme="snow"
                  value={Description}
                  onChange={setDescription}
                  className="custom-quill h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </form>

        <div className="pb-3 md:flex md:justify-center flex justify-center ">
          <Button name="Next" buttonFunction={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default ShareWork;
