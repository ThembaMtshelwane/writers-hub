import { useState } from "react";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import DrawerAuthorWorks from "../components/DrawerAuthorWorks";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid lg:grid-cols-[65%_30%] gap-[2%] mt-10 bg-[#F2F8F3] justify-self-center w-[95%] ">
        <section className="  w-full">
          <Outlet />
        </section>
        <div
          className="backdrop-blur-sm bg-black/5 fixed right-0 cursor-pointer rounded-l-full h-52 lg:hidden flex items-center"
          onClick={() => setIsOpen(true)}
        >
          <span className="w-8 h-1 -translate-x-1 bg-black/30 rounded-lg rotate-90"></span>
        </div>
        <DrawerAuthorWorks isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="hidden lg:block">
          <MainSideBar />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
