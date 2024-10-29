import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Review } from "../types";

interface RubricInputProps {
  work: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const RubricInput: React.FC<RubricInputProps> = ({
  work,
  isOpen,
  setIsOpen,
}: RubricInputProps) => {
  const [criteria, setCriteria] = useState({
    theme: 0,
    plot: 0,
    organization: 0,
    language: 0,
    convention: 0,
  });

  const [feedback, setFeedback] = useState<string>("");

  // Handle input changes for criteria points
  const handleCriteriaChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setCriteria({ ...criteria, [field]: Number(e.target.value) });
  };

  // Handle feedback change
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    const updatedReview: Review = {
      id: "",
      criteria: [
        { text: "Conveys a theme or a message", point: criteria.theme },
        {
          text: "Plot, setting, characters, details and development",
          point: criteria.plot,
        },
        { text: "Organization/structure", point: criteria.organization },
        { text: "Language and style", point: criteria.language },
        { text: "Convention", point: criteria.convention },
      ],
      feedback,
      score:
        criteria.theme +
        criteria.plot +
        criteria.organization +
        criteria.language +
        criteria.convention,
    };
    console.log("Submitted Review:", updatedReview);
    setIsOpen(!isOpen);
  };

  return (
    <form
      className="relative bg-white rounded-md flex flex-col items-center border-2 px-10 pb-10 w-[80%] max-w-[650px] mx-auto space-y-5 "
      onSubmit={handleSubmit}
    >
      <h2 className="p-5 text-2xl w-fit mt-10">{work} Review</h2>

      <div className="space-y-5 w-full">
        {[
          { label: "Conveys a theme or a message", field: "theme" },
          {
            label: "Plot, setting, characters, details and development",
            field: "plot",
          },
          { label: "Organization/structure", field: "organization" },
          { label: "Language and style", field: "language" },
          { label: "Convention", field: "convention" },
        ].map(({ label, field }) => (
          <div key={field} className="flex border border-black">
            <p className="p-2 w-full">{label}</p>
            <input
              className="border-l border-inherit px-5 flex items-center w-[80px]"
              type="number"
              min="0"
              max="5"
              value={criteria[field as keyof typeof criteria]}
              onChange={(e) => handleCriteriaChange(e, field)}
              required
            />
          </div>
        ))}
        <p>
          {criteria.theme +
            criteria.plot +
            criteria.organization +
            criteria.language +
            criteria.convention}
        </p>

        <textarea
          className="p-2 border border-black h-40 w-full"
          value={feedback}
          onChange={handleFeedbackChange}
          required
        />
      </div>

      <button type="submit" className="buttonStyle">
        Submit Review
      </button>

      {/* Close button */}
      <IoClose
        onClick={() => setIsOpen(!isOpen)}
        className="size-6 absolute right-5 top-5 cursor-pointer hover:text-black/50"
      />
    </form>
  );
};

export default RubricInput;
