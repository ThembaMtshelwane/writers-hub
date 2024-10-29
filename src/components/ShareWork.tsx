import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../index.css"; // Import the custom CSS file if needed
import { Genre } from "../types";
import axios from "axios";

const ShareWork = () => {
  const modules = {
    toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"]],
  };

  const [image, setImage] = useState<string | null>(null);
  const [Title, setTitle] = useState("");
  const [Genres, setGenres] = useState<Genre[]>([]);
  const [Description, setDescription] = useState("");
  const [base64, setBase64] = useState<string>("");
  const [Type, setType] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // const users: User[] = (await axios.get("/api/genres")).data;
        const { data } = await axios.get("/api/genres");

        console.log(data);
        setGenres(data);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchContent();
  }, []);

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
    <section className="py-3 px-3">
      <div className="bg-white rounded-3xl grid px-4 xl:px-6 md:h-[600px]  md:w-[450px] w-[260px]  lg:w-[600px] pc:w-[1200px] pc:h-[750px] xl:w-[850px] ">
        <h1 className="pt-10  text-sm xl:text-xl">SHARE YOUR WORK</h1>
        <form
          action=""
          className="grid grid-cols-1 py-10 2xl:py-5 lg: 2xl:space-x-1 space-y-3 md:grid-cols-2 pc:px-10"
        >
          <div className="flex flex-col ">
            <label htmlFor="file-upload">
              <img
                src={image || "https://via.placeholder.com/300x200"}
                alt="Upload Placeholder"
                className="w-48 h-[100px] object-cover text-center bg-gray-400 cursor-pointer md:h-[490px] lg:w-[250px]  xl:w-[350px] pc:h-[540px] pc:w-[500px] "
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
          <div className="border border-black w-[230px] md:w-[220px] md:px-2 md:h-[480px] px-3 pt-5 lg:w-[290px] lg:px-3 xl:w-[400px] xl:px-5    2xl:w-[400px] 2xl:h-[400px]  2xl:px-10 pc:h-[530px] pc:w-[450px] pc:px-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded-2xl w-[200px] lg:w-[270px] pc:w-[400px] xl:w-[350px] py-2 px-3 mb-2 kobus:w-[700px] border-black 2xl:w-[300px] md:w-[180px]"
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
                name="genres"
                className="border rounded-2xl w-[200px] pc:w-[400px] lg:w-[270px] xl:w-[350px] py-2 px-3 mb-2 kobus:w-[700px] border-black 2xl:w-[300px] md:w-[180px]"
                required
                // value={Genres.id}
                // onChange={(e) => setGenres(e.target.value)}
              >
                <option value="" disabled>
                  Select Genre
                </option>
                 {Genres.map((genre) => (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                ))} 
              </select>
            </div>

            <div className=" pb-6 space-y-2">
              <div>
                <h1>Type</h1>
              </div>
              <div className="flex">
                <div className="flex items-center me-4 ">
                  <input
                    id="movie-radio"
                    type="radio"
                    name="type"
                    value="Movie"
                    checked={Type === "Poem"}
                    onChange={(e) => setType(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="movie-radio"
                    className="ms-2 text-sm font-medium text-black kobus:text-3xl big:text-5xl"
                  >
                    Poem
                  </label>
                </div>
                <div className="flex items-center me-4 ">
                  <input
                    id="movie-radio"
                    type="radio"
                    name="type"
                    value="Movie"
                    checked={Type === "short story"}
                    onChange={(e) => setType(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="movie-radio"
                    className="ms-2 text-sm font-medium text-black kobus:text-3xl big:text-5xl"
                  >
                    Short story
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="series-radio"
                    type="radio"
                    name="type"
                    value="Series"
                    checked={Type === "long-form"}
                    onChange={(e) => setType(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="series-radio"
                    className="ms-2 text-sm font-medium text-black kobus:text-3xl big:text-5xl"
                  >
                    long-form
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <div className="border border-black w-[200px] lg:w-[270px] pc:w-[400px] pc:h-[180px] xl:w-[350px] h-52 kobus:w-[700px] 2xl:w-[300px] 2xl:h-[130px] md:w-[180px] md:h-[120px]">
                <ReactQuill
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
        <div className="pb-3 md:flex md:justify-center  ">
          <Link to={"write"}>
            <Button name="Next" buttonFunction={handleNext} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShareWork;
