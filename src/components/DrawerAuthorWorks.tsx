import { Drawer } from "flowbite-react";
// import { useState } from "react";
import { HiSquaresPlus } from "react-icons/hi2";
// import { IoIosClose } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import MainSideBar from "./MainSideBar";
// import { MdBorderColor } from "react-icons/md";

type DrawerTypes = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const DrawerAuthorWorks = ({ isOpen, setIsOpen }: DrawerTypes) => {
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer
        edge
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="p-0 lg:hidden block"
      >
        <Drawer.Header
          closeIcon={MdOutlineClose}
          title="Author/Works"
          titleIcon={HiSquaresPlus}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-4 pt-4 hover:bg-gray-50 "
        />
        <Drawer.Items className="border border-red-500">
          <MainSideBar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DrawerAuthorWorks;
