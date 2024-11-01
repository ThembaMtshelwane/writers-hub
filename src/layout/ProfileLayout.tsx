import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileSideBar from "../components/ProfileSideBar";
import { MdOutlineClose } from "react-icons/md";

const ProfileLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid sm:grid-cols-[30%_60%] min-h-[40vh] py-10 gap-[5%] mt-10 justify-self-center w-[95%] bg-[#F2F8F3] relative overflow-x-hidden">
        {/* Slide Button */}
        <div
          className="backdrop-blur-sm bg-black/5 fixed left-0 top-1/2 cursor-pointer rounded-l-full h-52 lg:hidden flex items-center rotate-180 sm:hidden z-10"
          onClick={toggleSidebar}
        >
          <span className="w-8 h-1 -translate-x-1 bg-black/30 rounded-lg rotate-90"></span>
        </div>

        {/* Sidebar */}
        <section
          className={`absolute  top-0 left-0  w-[80%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-10 sm:hidden h-full ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ProfileSideBar />
          <button
            onClick={toggleSidebar}
            className="p-2 bg-secondary text-white absolute top-4 right-4 rounded-md"
          >
            <MdOutlineClose />
          </button>
        </section>

        {/* Main Content */}
        <section className="hidden sm:flex  justify-center">
          <ProfileSideBar />
        </section>

        <Outlet />
      </main>
    </>
  );
};

export default ProfileLayout;
