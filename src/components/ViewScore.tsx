const ViewScore = () => {
  return (
    <div className="bg-white rounded-md flex flex-col items-center border-2 p-10 w-[30rem] mx-auto mb-20">
      <div className="p-5 text-2xl w-fit my-10 bg-secondary rounded-sm text-white">
        260
      </div>
      <div className="space-y-5 w-full mb-10">
        <div className="flex hover:bg-secondary hover:text-white border border-black hover:border-white cursor-pointer transition ease-in-out duration-500">
          <p className=" p-2 w-full">{"Work 1"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            20
          </span>
        </div>

        <div className="flex hover:bg-secondary hover:text-white border border-black hover:border-white cursor-pointer transition ease-in-out duration-500">
          <p className=" p-2 w-full">{"Work 2"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            15
          </span>
        </div>

        <div className="flex hover:bg-secondary hover:text-white border border-black hover:border-white cursor-pointer transition ease-in-out duration-500">
          <p className=" p-2 w-full">{"Work 3"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            15
          </span>
        </div>

        <div className="flex hover:bg-secondary hover:text-white border border-black hover:border-white cursor-pointer transition ease-in-out duration-500">
          <p className=" p-2 w-full">{"Work 4"}</p>
          <span className="border-l border-inherit px-5 flex items-center">
            20
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewScore;
