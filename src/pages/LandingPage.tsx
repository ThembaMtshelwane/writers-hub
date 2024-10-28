import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import FilterButton from "../components/FilterButton";
// import { IoMenuOutline } from "react-icons/io5";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

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
      <main className="grid md:grid-cols-[65%_30%] mt-10 gap-[5%] justify-self-center w-[95%] relative">
        <section className=" w-full space-y-8">
          <div className="rounded-full border border-slate-800 bg-transparent">
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="w-full rounded-full px-6 py-2 text-sm text-slate-800 focus:border-secondary focus:outline-none md:text-base "
              onChange={handleSearch}
            />
          </div>
          <div className="space-x-8">
            {["poem", "short story", "long form"].map((types, index) => {
              return (
                <FilterButton
                  key={index}
                  name={types}
                  isSelected={selectedFilter.includes(types)}
                  onSelect={handleSelection}
                />
              );
            })}
          </div>

          <div className="w-full ">
            <MainCardGrid
              search={searchQuery}
              selectedFilter={selectedFilter}
            />
          </div>
        </section>
        <div className="hidden md:block">
          <MainSideBar />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
