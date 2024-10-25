import Navbar from "../components/Navbar";
import { IoIosWarning } from "react-icons/io";

const NotFound = () => {
  return (
    <section className="">
      <Navbar />
      <section className="h-[70vh]  w-full flex justify-center items-center">
        <section className="w-[50%] flex flex-col items-center justify-center h-[50vh]">
          <div className="bg-secondary p-4 rounded-full inline-block">
            <IoIosWarning className="text-9xl text-white" />
          </div>
          <h1 className="text-5xl m-10">Sorry page not found</h1>
        </section>
      </section>
    </section>
  );
};

export default NotFound;
