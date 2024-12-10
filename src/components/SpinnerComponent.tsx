import { CustomFlowbiteTheme, Spinner } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["spinner"] = {
  color: {
    blue: "fill-blue-600",
  },
};

const SpinnerComponent = () => {
  return (
    <div className='h-full flex justify-center items-center border-2 border-red-500'>
      <Spinner
        aria-label='Default status example'
        size='xl'
        className='size-40'
        theme={customTheme}
        color='blue'
      />
    </div>
  );
};

export default SpinnerComponent;
