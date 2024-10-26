import { Outlet } from "react-router-dom";
import MainCardGrid from "../components/MainCardGrid";
import FilterButton from "../components/FilterButton";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthLayout = () => {
  const [genres, setGenres] = useState<string[]>([]);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data: string[] = (await axios.get("/api/genres")).data;
        console.log("data", data);

        setGenres(data);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <section className="grid grid-cols-[60%_40%]">
      <section className="bg-primary h-screen">
        <section className="my-3 p-4 ">
          <h2 className="text-4xl text-accent">Categories</h2>
          <section className="flex gap-2 my-4 flex-wrap">
            {genres.map((genre: string) => (
              <FilterButton name={genre} key={genre} />
            ))}
          </section>
        </section>
        <MainCardGrid />
      </section>
      <section className="bg-secondary h-screen flex items-center fixed right-0 w-[40%]">
        <Outlet />
      </section>
    </section>
  );
};

export default AuthLayout;
