import { Outlet } from "react-router-dom";
import MainCardGrid from "../components/MainCardGrid";

const AuthLayout = () => {
  return (
    <section className="grid grid-cols-[60%_40%]">
      <section className="bg-primary h-screen">
        <MainCardGrid />
      </section>
      <section className="bg-secondary h-screen flex items-center fixed right-0 w-[40%]">
        <Outlet />
      </section>
    </section>
  );
};

export default AuthLayout;
