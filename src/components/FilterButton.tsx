import { useState } from "react";

type FilterButtonProps = {
  name: string;
};

const FilterButton = ({ name }: FilterButtonProps) => {
  const [isChosen, setIsChosen] = useState<boolean>(false);

  const handleChosenGenre = () => {
    setIsChosen((prev: boolean) => !prev);
  };

  return (
    <button
      className={`p-2 rounded-md min-w-[80px] ${
        isChosen
          ? " bg-[#528362] text-white hover:bg-[#295131] border"
          : "bg-white text-black border border-[#528362] hover:bg-[#F2F8F3]"
      }`}
      onClick={handleChosenGenre}
    >
      {name}
    </button>
  );
};

export default FilterButton;
