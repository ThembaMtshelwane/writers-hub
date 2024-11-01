import React, { useState } from "react";
import BasicInfoCard from "./BasicInfoCard";
import img1 from "../assets/Images/Robert-Frost-Portrait-Square.webp";
import { useLocation } from "react-router-dom";

const Preview: React.FC = () => {
  const location = useLocation();

  const { Title, Author, Description, Write } = location.state || {};

  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = () => {
    const dataToSave = {
      title: Title,
      author: Author || "Ashleigh",
      description: Description,
      write: Write,
    };
    setSubmittedData(dataToSave);
    console.log("Submitted Data: ", dataToSave);

  alert("Your data has been submitted!");
  };

  return (
    <section className="">
      <div className="border">
        <div>
          <BasicInfoCard
            title={Title}
            author={Author || "Ashleigh"}
            description={Description}
            image={img1}
            
          />
        </div>
        <div className="py-5 text-start ">
          <p className="text-sm ">{Write}</p>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <button
          className="p-2 rounded-md min-w-[80px] bg-secondary text-white hover:bg-accent"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default Preview;
