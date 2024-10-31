import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import FilterButton from "../components/FilterButton";
import { Type } from "../types";
import axios from "axios";
// import { IoMenuOutline } from "react-icons/io5";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const { data } = await axios.get("/api/types");
        setTypes(data);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchTypes();
  }, []);

  const handleSelection = (filter: string) => {
    setSelectedFilter((selected) =>
      selected.includes(filter)
        ? selected.filter((name) => name !== filter)
        : [...selected, filter]
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <HeroSlider />
      <main className="grid lg:grid-cols-[65%_30%] mt-10 gap-[5%] justify-self-center w-[95%] relative">
        <section className=" w-full space-y-8">
          <div className="space-x-8">
            {types.map((type, index) => {
              return (
                <FilterButton
                  key={index}
                  name={type.name}
                  id={type.id}
                  isSelected={selectedFilter.includes(type.id)}
                  onSelect={handleSelection}
                />
              );
            })}
          </div>

          <div className="rounded-full border border-slate-800 bg-transparent">
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="w-full rounded-full px-6 py-2 text-sm text-slate-800 focus:border-secondary focus:outline-none md:text-base "
              onChange={handleSearch}
            />
          </div>

          <div className="w-full ">
            <MainCardGrid
              search={searchQuery}
              selectedFilter={selectedFilter}
            />
          </div>
        </section>
        
        <div className="hidden lg:block">
          <MainSideBar />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
