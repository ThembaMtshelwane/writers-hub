import React from "react";
import { IoClose } from "react-icons/io5";
import { Point, Review } from "../types";
import Button from "./Button";

// Define types for props
interface RubricProps {
  work: string;
  onClose: () => void;
  isDisabled: boolean;
  review: Review;
}

const Rubric: React.FC<RubricProps> = ({
  work,
  onClose,
  isDisabled,
  review,
}) => {
  return (
    <div className="relative bg-white rounded-md flex flex-col items-center border-2 px-10 pb-10 w-[30rem] mx-auto mb-20 space-b-5">
      <h2 className="p-5 text-2xl w-fit mt-10">{work} REVIEW</h2>

      <div className="space-y-5 w-full mb-6">
        {review.criteria.map((criteria: Point) => {
          return (
            <div className="flex border border-black" key={criteria.text}>
              <p className=" p-2 w-full">{criteria.text}</p>
              <input
                className="border-l border-inherit px-5 flex items-center w-[60px]"
                type="text"
                value={criteria.point}
                disabled={isDisabled}
              />
            </div>
          );
        })}

        <textarea
          className="p-2 border border-black h-40 mb-6 w-full "
          disabled={isDisabled}
          value={review.feedback}
        />
      </div>

      {isDisabled ? (
        <div className="p-5 border border-black text-2xl w-fit rounded-md">
          {review.score}
        </div>
      ) : (
        <Button
          name={"Submit Review"}
          buttonFunction={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}

      {/* Close button */}
      <IoClose
        onClick={onClose}
        className="size-6 absolute right-5 top-5 cursor-pointer hover:text-black/50"
      />
    </div>
  );
};

export default Rubric;
