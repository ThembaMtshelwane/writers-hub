import React from "react";
import img2 from "../assets/Images/book.jpg";

const BasicInfoCard: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-7 gap-4  bg-white border ">
      <div className="col-span-1 grid place-content-center  lg:place-content-start">
        <img className="w-48" src={img2} />
      </div>

      <div className="mt-7 space-y-2 py-2 md:col-span-2 md:text-left md:p-1  lg:col-span-3  ">
        <h1 className="font-bold text-2xl lg:text-4xl">OTHER LONDON</h1>
        <h2 className="font-thin text-gray-500 text-md lg:text-lg  ">
          M.V STOTT
        </h2>
        <h3 className=" text-sm lg:p-0 sm:col-span-1 place-content-center ">
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
