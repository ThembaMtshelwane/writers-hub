import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import FilterButton from "../components/FilterButton";
import { IGenre } from "../types";
import DrawerAuthorWorks from "../components/DrawerAuthorWorks";
import { useLocation } from "react-router-dom";
import { useGetTypesQuery } from "../slices/typeApiSlice";
// import { MdExpandMore } from "react-icons/md";
// import { IoMenuOutline } from "react-icons/io5";

const LandingPage = () => {
  // const [searchQuery, setSearchQuery] = useState<string>("");
  const [types, setTypes] = useState<IGenre[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const userPreference = location.state;
  console.log(userPreference);

  const { data } = useGetTypesQuery();

  useEffect(() => {
    if (data) setTypes(data?.data);
  }, [data]);

  const handleSelection = (filter: string) => {
    setSelectedFilter((selected) =>
      selected.includes(filter)
        ? selected.filter((name) => name !== filter)
        : [...selected, filter]
    );
  };

  return (
    <>
      <Navbar />
      <HeroSlider />
      <main className='grid lg:grid-cols-[65%_30%] mt-10 lg:gap-[5%] justify-self-center w-[95%] relative'>
        <section className=' w-full space-y-8'>
          <div className='space-x-8'>
            {types.map((type, index) => {
              return (
                <FilterButton
                  key={index}
                  name={type.name}
                  id={type._id}
                  isSelected={selectedFilter.includes(type._id)}
                  onSelect={handleSelection}
                />
              );
            })}
          </div>

          {/* <div className="rounded-full border border-slate-800 bg-transparent">
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="w-full rounded-full px-6 py-2 text-sm text-slate-800 focus:border-secondary focus:outline-none md:text-base "
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
          </div> */}

          <div className='w-full'>
            <MainCardGrid
            // search={searchQuery}
            // selectedFilter={selectedFilter}
            />
          </div>
        </section>
        <div
          className='backdrop-blur-sm bg-black/5 fixed right-0 cursor-pointer rounded-l-full h-52 lg:hidden flex items-center'
          onClick={() => setIsOpen(true)}
        >
          <span className='w-8 h-1 -translate-x-1 bg-black/30 rounded-lg rotate-90'></span>
        </div>
        <DrawerAuthorWorks isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className='hidden lg:block'>
          <MainSideBar />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
