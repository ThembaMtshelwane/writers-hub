type Props = {
  setIsOpen: (isOpen: boolean) => void;
  position: string;
  orientation: string;
};

const SlideButton = ({ setIsOpen, position, orientation }: Props) => {
  return (
    <div
      className={`backdrop-blur-sm bg-black/5  ${position} cursor-pointer rounded-l-full h-52 lg:hidden flex items-center`}
      onClick={() => setIsOpen(true)}
    >
      <span
        className={`w-8 h-1 -translate-x-1 bg-black/30 rounded-lg  ${orientation}  `}
      ></span>
    </div>
  );
};

export default SlideButton;
