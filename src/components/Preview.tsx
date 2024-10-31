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
      title: Title || "Beautiful Lie",
      author: Author || "Ashleigh",
      description: Description || "ever since the 1500s, when an unknown printer took a galley of type",
      write: Write,
    };
    
  
    setSubmittedData(dataToSave);
    console.log("Submitted Data: ", dataToSave); 
  };

  return (
    <section className="">
      <div className="border">
        <div>
          <BasicInfoCard
            title={Title || "Beautiful Lie"}
            author={Author || "Ashleigh"}
            description={
              Description ||
              "ever since the 1500s, when an unknown printer took a galley of type"
            }
            image={img1}
          />
        </div>
        <div className="py-5 text-start ">
          <p className="text-sm ">
            {Write}
          </p>
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
