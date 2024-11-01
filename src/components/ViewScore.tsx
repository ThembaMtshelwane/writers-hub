import { useState } from "react";
import Rubric from "./Rubric"; // Import the Rubric component

const ViewScore = () => {
  const [showRubric, setShowRubric] = useState<boolean>(false); // State to toggle the popup
  const [selectedWork, setSelectedWork] = useState<string>(""); // State to track selected work

  // Function to open the popup with the selected work
  const handleOpenRubric = (work: string) => {
    setSelectedWork(work);
    setShowRubric(true);
  };

  return (
    <div className="relative">
      <div className="bg-white w-[90%] rounded-md flex flex-col items-center border-2 p-10 mx-auto mb-20 md:w-[25rem] lg:w-[37rem] lg:h-[34rem] xl:w-[50rem] xl:h-[40rem] max-w-[40rem]">
        <div className="p-5 text-2xl w-fit my-10 bg-secondary rounded-sm text-white">
          260
        </div>
        <div className="space-y-5 w-full mb-10">
          {["Work 1", "Work 2", "Work 3", "Work 4"].map((work, index) => (
            <div
              key={index}
              onClick={() => handleOpenRubric(work)}
              className="flex hover:bg-secondary hover:text-white border border-black hover:border-white cursor-pointer transition ease-in-out duration-500"
            >
              <p className="p-2 w-full">{work}</p>
              <span className="border-l border-inherit px-5 flex items-center">
                20
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditional rendering for Rubric popup */}
      {showRubric && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Rubric
            work={selectedWork}
            onClose={() => setShowRubric(false)}
            isDisabled={true}
            review={{
              id: "wwwwwwwwwwwwwww",
              criteria: [
                {
                  text: "Conveys a theme or a message",
                  point: 3,
                },
                {
                  text: "Plot, setting, characters, details and development",
                  point: 1,
                },
                {
                  text: "Organization/structure",
                  point: 0,
                },
                {
                  text: "Language abd style",
                  point: 1,
                },
                {
                  text: "Convention",
                  point: 3,
                },
              ],
              score: 12,
              feedback:
                "Well done! You did a very good job, however there is definitely room for improvement",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ViewScore;
