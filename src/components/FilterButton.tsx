type FilterButtonProps = {
  id: string;
  name: string;
  isSelected: boolean;
  onSelect: (genreName: string) => void;
};

const FilterButton = ({
  name,
  isSelected,
  onSelect,
  id,
}: FilterButtonProps) => {
  const handleChosenGenre = () => {
    onSelect(id);
  };

  return (
    <button
      className={`p-2 rounded-md min-w-[80px] ${
        isSelected
          ? "bg-secondary text-white hover:bg-accent border"
          : "bg-white text-black border border-secondary hover:bg-primary"
      }`}
      onClick={handleChosenGenre}
    >
      {name}
    </button>
  );
};

export default FilterButton;
