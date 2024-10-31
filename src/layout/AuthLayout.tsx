import { Outlet } from "react-router-dom";
import MainCardGrid from "../components/MainCardGrid";
import FilterButton from "../components/FilterButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Genre } from "../types";

const AuthLayout = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = (await axios.get("/api/genres")).data;
        setGenres(data);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchGenres();
  }, []);

  const handleSelection = (filter: string) => {
    setSelectedFilter((selected) =>
      selected.includes(filter)
        ? selected.filter((name) => name !== filter)
        : [...selected, filter]
    );
  };

  return (
    <section className="grid  sm:grid-cols-[50%_50%] xl:grid-cols-[60%_40%]">
      {/* Left Section */}
      <section className="bg-primary h-screen overflow-y-auto">
        <section className="my-3 p-4 flex flex-col items-center">
          <h2 className="text-4xl text-accent mt-4">Categories</h2>
          <section className="flex gap-2 my-4 flex-wrap">
            {genres.map((genre) => (
              <FilterButton
                name={genre.id}
                key={genre.id}
                isSelected={selectedFilter.includes(genre.id)}
                onSelect={handleSelection}
              />
            ))}
          </section>
        </section>
        <MainCardGrid search={""} selectedFilter={selectedFilter} />
      </section>

      {/* Right Section */}
      <section className="bg-secondary h-screen overflow-y-auto absolute w-full z-30 top-0 right-0 sm:w-[50%] xl:w-[40%] flex">
        <Outlet />
      </section>
    </section>
  );
};

export default AuthLayout;
