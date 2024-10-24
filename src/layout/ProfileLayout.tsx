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
        <Outlet />
      </main>
    </>
  );
};

export default ProfileLayout;
