import { Outlet } from "react-router-dom";
import MainCardGrid from "../components/MainCardGrid";
import FilterButton from "../components/FilterButton";
import { useEffect, useState } from "react";
import { IGenre } from "../types";
import { useGetGenresQuery } from "../slices/genreApiSlice";

const AuthLayout = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const { data, isLoading } = useGetGenresQuery();

  //TODO: Filter is not functional
  useEffect(() => {
    if (data) setGenres(data.data);
  }, [data]);

  const handleSelection = (filter: string) => {
    setSelectedFilter((selected) =>
      selected.includes(filter)
        ? selected.filter((name) => name !== filter)
        : [...selected, filter]
    );
  };

  return (
    <section className='grid  sm:grid-cols-[50%_50%] xl:grid-cols-[60%_40%]'>
      {/* Left Section */}
      <section className='bg-primary h-screen overflow-y-auto py-10'>
        <section className='my-3 p-4 flex flex-col items-center'>
          <h2 className='text-4xl text-accent mt-4 mb-4'>Categories</h2>
          <section className='flex gap-2 my-4 flex-wrap items-center justify-center'>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              genres.map((genre, index) => (
                <FilterButton
                  name={genre.name}
                  id={genre._id}
                  key={index}
                  isSelected={selectedFilter.includes(genre._id)}
                  onSelect={handleSelection}
                />
              ))
            )}
          </section>
        </section>
        <MainCardGrid /*search={""} selectedFilter={selectedFilter}*/ />
      </section>

      {/* Right Section */}
      <section className='bg-secondary h-screen overflow-y-auto absolute w-full z-30 top-0 right-0 sm:w-[50%] xl:w-[40%] flex py-10'>
        <Outlet />
      </section>
    </section>
  );
};

export default AuthLayout;
