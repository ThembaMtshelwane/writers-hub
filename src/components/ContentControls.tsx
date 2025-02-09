import { useState } from "react";
import { VscKebabVertical } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ContentControls = ({username, id}:{username:string; id:string}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <VscKebabVertical
        onClick={() => setOpen((prev) => !prev)}
        className="scale-150 absolute right-2 top-3"
      />
      {open && (
        <div className="border-l border-b border-secondary w-[100px] absolute right-0  flex flex-col bg-white rounded-tl-lg rounded-bl-lg ">
          <h2 onClick={() => setOpen((prev) => !prev)} className="ml-auto p-2">
            X
          </h2>
          <Link
            to={`/edit/${username}/${id}/basic-info`}
            className="text-center p-2  border-t border-secondary w-full"
          >
            Edit
          </Link>
          <h2 className="text-center p-2 border-t border-secondary w-full">
            Delete
          </h2>
        </div>
      )}
    </>
  );
};

export default ContentControls;
