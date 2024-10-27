import React from "react";
import BasicInfoCard from "./BasicInfoCard";

const Preview: React.FC = () => {
  return (
    <section className="">
      <div className="border">
        <div>
          <BasicInfoCard />
        </div>
        <div className="py-5 text-start ">
          <h1 className="sm:text-sm  lg:text-md ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h1>
        </div>
      </div>

      <div className="flex justify-center py-10">
          <button className="p-2 rounded-md min-w-[80px] bg-secondary text-white hover:bg-accent ">
            SUBMIT
          </button>
        </div>
    </section>
  );
};

export default Preview;
