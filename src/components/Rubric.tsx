import { IoClose } from "react-icons/io5";

const Rubric = () => {
  return (
    <div className="relative bg-white rounded-md flex flex-col items-center border-2 px-10 pb-10 w-[30rem] mx-auto mb-20 space-b-5">
      <h2 className="p-5 text-2xl w-fit mt-10">WORK 1 REVIEW</h2>

      <div className="space-y-5 w-full mb-6">
        <div className="flex border border-black">
          <p className=" p-2 w-full">{"Criteria 1"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            4
          </span>
        </div>

        <div className="flex border border-black">
          <p className=" p-2 w-full">{"Criteria 2"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            5
          </span>
        </div>

        <div className="flex border border-black">
          <p className=" p-2 w-full">{"Criteria 3"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            5
          </span>
        </div>

        <div className="flex border border-black">
          <p className=" p-2 w-full">{"Criteria 4"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            6
          </span>
        </div>
      </div>

      <p className="p-2 border border-black h-40 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        consequuntur in labore ex cupiditate accusantium eveniet! Voluptate
        voluptatem dicta cumque?
      </p>
      <div className="p-5 border border-black text-2xl w-fit rounded-md">
        20
      </div>
      <IoClose className="size-6 absolute right-5 top-5 cursor-pointer hover:text-black/50" />
    </div>
  );
};

export default Rubric;
