import { useEffect, useState } from "react";
import { Genre } from "../types";
import FilterButton from "../components/FilterButton";
import axios from "axios";
// import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const PreferencePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios("/api/genres");
      setGenres(data);
    };

    fetchGenres();
  }, []);

  const handleGenreSelection = (genreName: string) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genreName)
        ? prevSelected.filter((name) => name !== genreName)
        : [...prevSelected, genreName]
    );
  };

  const handleSubmit = () => {
    console.log("Selected genres:", selectedGenres);
    navigate("/index", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 transition-all ease-in-out duration-500">
      <h1 className="text-xl md:text-3xl lg:text-6xl">
        Choose Your Preference
      </h1>
      <div className="flex justify-center items-start p-5 md:w-[90%] text-base sm:text-lg md:text-2xl lg:text-4xl gap-10 flex-wrap h-auto">
        {genres.map((genre) => (
          <FilterButton
            key={genre.id}
            name={genre.name}
            isSelected={selectedGenres.includes(genre.name)}
            onSelect={handleGenreSelection}
          />
        ))}
      </div>
      <button
        className="p-2 rounded-md min-w-[80px] bg-secondary text-white hover:bg-accent md:text-2xl lg:text-4xl disabled:bg-black/50 disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={selectedGenres.length === 0}
      >
        Submit
      </button>
    </div>
  );
};

export default PreferencePage;
