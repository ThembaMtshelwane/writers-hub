import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileSideBar: React.FC = () => {
  const [chosenButton, setChosenButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setChosenButton((prev) => (prev === buttonName ? null : buttonName));
  };

  return (
    <div className=" p-10 ">
      <div className="space-y-2 grid place-items-center border ">
        <Link to="/profile">
          <button
            onClick={() => handleClick("personal-info")}
            className="bg-white grid flex-row w-[200px] h-[70px] p-5"
          >
            PERSONAL INFO
            <div className="grid place-content-center mt-2">
              {chosenButton === "personal-info" && (
                <hr className="border-[2px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>

        <Link to="/profile/works">
          <button
            onClick={() => handleClick("works")}
            className="bg-white grid flex-row w-[200px] h-[70px] p-5"
          >
            WORKS
            <div className="grid place-content-center mt-2">
              {chosenButton === "works" && (
                <hr className="border-[2px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>

        <Link to="/profile/reviews">
          <button
            onClick={() => handleClick("reviews")}
            className="bg-white grid flex-row w-[200px] h-[70px] p-5"
          >
            REVIEWS
            <div className="grid place-content-center mt-2">
              {chosenButton === "reviews" && (
                <hr className="border-[2px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>

        <Link to="/profile/view-score">
          <button
            onClick={() => handleClick("view-score")}
            className="bg-white grid flex-row w-[200px] h-[70px] p-5 "
          >
            VIEW SCORE
            <div className="grid place-content-center mt-2">
              {chosenButton === "view-score" && (
                <hr className="border-[2px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSideBar;
