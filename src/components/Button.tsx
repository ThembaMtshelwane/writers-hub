type ButtonProps = {
  name: string;
  buttonFunction: () => void;
};

const Button = ({ name, buttonFunction }: ButtonProps) => {
  return (
    <button
      className="p-2 rounded-md min-w-[80px] bg-secondary text-white hover:bg-accent"
      onClick={buttonFunction}
    >
      {name}
    </button>
  );
};

export default Button;
