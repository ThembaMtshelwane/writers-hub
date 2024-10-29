type ButtonProps = {
  name: string;
  buttonFunction: () => void;
};

const Button = ({ name, buttonFunction }: ButtonProps) => {
  return (
    <button className="buttonStyle " onClick={buttonFunction}>
      {name}
    </button>
  );
};

export default Button;
