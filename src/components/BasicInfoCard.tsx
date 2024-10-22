import React from "react";
import img2 from "../assets/Images/book.jpg";

const BasicInfoCard: React.FC = () => {
  return (
    <div className=" grid grid-flow-col sm:grid-flow-row md:grid-flow-col gap-8  border">
      <div className="md:place-content-center">
        <img className="w-48  " src={img2} alt="" />
      </div>

      <div className="mt-7 space-y-3">
        <h1 className="font-bold text-5xl">OTHER LONDON</h1>
        <h2 className="font-thin text-gray-500 text-md">M.V STOTT</h2>
        <h3 className="w-1/2 text-justify">
          Other London explores a dark, magical underworld hidden beneath the
          familiar streets of London. M.V. Stott takes readers on a journey
          where ancient forces, secret societies, and forgotten myths come alive
          in a city that is more than meets the eye.
        </h3>
      </div>
    </div>
  );
};

export default BasicInfoCard;
