type ButtonProps = {
  name: string;
  buttonFunction: () => void;
};

const Button = ({ name, buttonFunction }: ButtonProps) => {
  return (
    <button
      className="p-2 rounded-md min-w-[80px] bg-[#528362] text-white hover:bg-[#295131]"
      onClick={buttonFunction}
    >
      {name}
    </button>
  );
};

export default Button;
