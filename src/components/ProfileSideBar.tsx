import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileSideBar: React.FC = () => {
  const [chosenButton, setChosenButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setChosenButton((prev) => (prev === buttonName ? null : buttonName));
  };

  return (
    <div className="bg-[#F2F8F3] p-10">
      <div className="space-y-2 grid place-items-center">
        <Link to="/profile">
          <button
            onClick={() => handleClick("personal-info")}
            className="bg-white p-6 min-w-[200px] "
          >
            PERSONAL INFO
            <div className="grid place-content-center mt-2">
              {chosenButton === "personal-info" && (
                <hr className="border-[3px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>

        <Link to="/profile/works">
          <button
            onClick={() => handleClick("works")}
            className="bg-white p-6 min-w-[200px]"
          >
            WORKS
            <div className="grid place-content-center mt-2">
              {chosenButton === "works" && (
                <hr className="border-[3px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>

        <Link to="/profile/reviews">
          <button
            onClick={() => handleClick("reviews")}
            className="bg-white p-6 min-w-[200px] "
          >
            REVIEWS
            <div className="grid place-content-center mt-2">
              {chosenButton === "reviews" && (
                <hr className="border-[3px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>

        <Link to="/profile/view-score">
          <button
            onClick={() => handleClick("view-score")}
            className="bg-white p-6 min-w-[200px] "
          >
            VIEW SCORE
            <div className="grid place-content-center mt-2">
              {chosenButton === "view-score" && (
                <hr className="border-[3px] w-32 flex border-[#528362]" />
              )}
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSideBar;
