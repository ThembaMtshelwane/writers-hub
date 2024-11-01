import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileSideBar from "../components/ProfileSideBar";

const ProfileLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid  sm:grid-cols-[30%_60%] min-h-[40vh] py-10 gap-[5%] mt-10 justify-self-center w-[95%] bg-[#F2F8F3]">
        <section className="hidden sm:flex">
          <ProfileSideBar />
        </section>
        <section className=" ">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default ProfileLayout;
