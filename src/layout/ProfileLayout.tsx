import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileSideBar from "../components/ProfileSideBar";

const ProfileLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-[30%_70%]">
        <ProfileSideBar />
        <section className="border-2 bg-red-200">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default ProfileLayout;
