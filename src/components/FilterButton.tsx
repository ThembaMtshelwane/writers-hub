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
          ? " bg-secondary text-white hover:bg-accent border"
          : "bg-white text-black border border-secondary hover:bg-primary"
      }`}
      onClick={handleChosenGenre}
    >
      {name}
    </button>
  );
};

export default FilterButton;
