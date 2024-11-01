import { Drawer } from "flowbite-react";
import { MdOutlineClose } from "react-icons/md";
import AuthorWorks from "./AuthorWorks";
import author from "../assets/Images/author.png";

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
        className="p-0 lg:hidden block bg-primary"
      >
        <Drawer.Header
          closeIcon={() => <MdOutlineClose className="text-gray-500 text-lg" />}
          title="Author/Works"
          titleIcon={() => <></>}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-4 pt-4 hover:bg-gray-50 border-black border-b"
        />
        <Drawer.Items>
          <div className="flex flex-col gap-4 p-3">
            <div>
              <AuthorWorks
                image={author}
                title="The joy ride"
                AuthorName="Lwandile majola"
                description="Lorem ipsum dolor sit amet quas optio cum non alias.."
              />
            </div>
            <div>
              <AuthorWorks
                image={author}
                title="The joy ride"
                AuthorName="Lwandile majola"
                description="Lorem ipsum dolor sit amet quas optio cum non alias.."
              />
            </div>
            <div>
              <AuthorWorks
                image={author}
                title="The joy ride"
                AuthorName="Lwandile majola"
                description="Lorem ipsum dolor sit amet quas optio cum non alias.."
              />
            </div>
            <div>
              <AuthorWorks
                image={author}
                title="The joy ride"
                AuthorName="Lwandile majola"
                description="Lorem ipsum dolor sit amet quas optio cum non alias.."
              />
            </div>
            <div>
              <AuthorWorks
                image={author}
                title="The joy ride"
                AuthorName="Lwandile majola"
                description="Lorem ipsum dolor sit amet quas optio cum non alias.."
              />
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DrawerAuthorWorks;
