import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import FilterButton from "../components/FilterButton";
// import Button from "../components/Button";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string[]>(["Latest"]);

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
      <main className="grid grid-cols-[70%_30%] mt-10 gap-5 justify-self-center w-[95%] ">
        <section className=" w-full space-y-8">
          <div className="space-x-8">
            {["Latest", "Poems", "Short Stories", "Long-Form"].map(
              (types, index) => {
                return (
                  <FilterButton
                    key={index}
                    name={types}
                    isSelected={selectedFilter.includes(types)}
                    onSelect={handleSelection}
                  />
                );
              }
            )}
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
          <MainCardGrid search={searchQuery} />
        </section>
        <MainSideBar />
      </main>
    </>
  );
};

export default LandingPage;
