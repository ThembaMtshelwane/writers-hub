import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-[65%_30%] gap-[2%] mt-10  justify-self-center w-[95%] ">
        <section className="border-2  w-full">
          <Outlet />
        </section>
        <MainSideBar />
      </main>
    </>
  );
};

export default MainLayout;
