import React from "react";
import img1 from "../assets/Images/Robert-Frost-Portrait-Square.webp";

const CommentCard: React.FC = () => {
  return (
    <div className=" bg-[#F2F8F3]">
      <div className="grid grid-flow-col border p-4 py-6 gap-5">
        <div className="grid place-content-center">
          <img className="rounded-full w-28" src={img1} alt="" />
        </div>

        <div className="grid place-content-center ">
          <h1 className="text-md font-semibold text-gray-500">Themba Martin</h1>

          <p className="mt-2 text-balance text-sm  ">
            One of the most captivating books I've ever read is *The Alchemist*
            by Paulo Coelho. Its profound simplicity and timeless wisdom remind
            us to follow our dreams and listen to our hearts. The story's themes
            of self-discovery, resilience, and the beauty of the journey make it
            an inspiring and uplifting read for anyone seeking purpose and
            meaning in life. It's a book that stays with you long after you've
            turned the last page! ♥🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
