import React from "react";
import img1 from "../assets/Images/Robert-Frost-Portrait-Square.webp";

const CommentCard: React.FC = () => {
  return (
    <div className="bg-[#F2F8F3]">
      <div className="grid sm:grid-cols-1 lg:grid-cols-7 gap-4  bg-white">
        <div className="col-span-1 grid place-content-center">
          <img className="rounded-full w-20 sm:w-24 md:w-28" src={img1} />
        </div>
        <div className="  space-y-2  md:col-span-2 md:text-left md:p-1 lg:col-span-4 lg:p-3 ">
          <h1 className="text-sm md:text-md font-semibold text-gray-500 ">
            Themba Martin
          </h1>
          <p className="mt-2 text-[10px] sm:text-sm ">
            One of the most captivating books I've ever read is
            The Alchemist by Paulo Coelho. Its profound simplicity and
            timeless wisdom remind us to follow our dreams and listen to our
            hearts. The story's themes of self-discovery, resilience, and the
            beauty of the journey make it an inspiring and uplifting read for
            anyone seeking purpose and meaning in life. It's a book that stays
            with you long after you've turned the last page! ♥🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
