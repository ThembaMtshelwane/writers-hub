import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileSideBar from "../components/ProfileSideBar";

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
        <button
          onClick={toggleSidebar}
          className="buttonStyle w-fit absolute top-1/2 left-2   sm:hidden"
        >
          SIDE
        </button>

        {/* Sidebar */}
        <section
          className={`absolute  top-0 left-0 h-full w-[80%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-10 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ProfileSideBar />
          <button
            onClick={toggleSidebar}
            className="p-2 bg-red-500 text-white absolute top-4 right-4 rounded-md"
          >
            Close
          </button>
        </section>

        {/* Main Content */}
        <section className="hidden sm:flex">
          <ProfileSideBar />
        </section>

        <Outlet />
      </main>
    </>
  );
};

export default ProfileLayout;
