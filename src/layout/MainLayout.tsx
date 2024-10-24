import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-[60%_30%]">
        <Outlet />
        <MainSideBar />
      </main>
    </>
  );
};

export default MainLayout;
