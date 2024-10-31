import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid lg:grid-cols-[65%_30%] gap-[2%] mt-10 bg-[#F2F8F3] justify-self-center w-[95%] ">
        <section className="  w-full">
          <Outlet />
        </section>
        <div className="hidden lg:block">
          <MainSideBar />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
