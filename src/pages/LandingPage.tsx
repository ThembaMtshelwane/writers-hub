import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import FilterButton from "../components/FilterButton";
// import Button from "../components/Button";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  console.log(searchQuery);
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
                  <FilterButton key={index} name={types} />
                  // <a
                  //   key={index}
                  //   onClick={() => console.log("Link Clicked")}
                  //   className="py-3 px-5 text-lg rounded-full min-w-[80px] bg-secondary text-white cursor-pointer border border-transparent hover:bg-white hover:border-secondary hover:text-black"
                  // >
                  //   {types}
                  // </a>
                );
              }
            )}
          </div>

          <input
            type="text"
            placeholder="Search"
            id="search"
            className="w-full rounded-full border border-slate-800 bg-transparent px-6 py-2 text-sm text-slate-800 focus:border-secondary focus:outline-none md:text-base "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <MainCardGrid />
        </section>
        <MainSideBar />
      </main>
    </>
  );
};

export default LandingPage;
