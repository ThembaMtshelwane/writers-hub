import { useState } from "react";
import { VscKebabVertical } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useDeleteContentMutation } from "../slices/contentApiSlice_Lwa";

const ContentControls = ({
  username,
  id,
}: {
  username: string;
  id: string;
}) => {
  const [open, setOpen] = useState(false);
  const [deleteContent] = useDeleteContentMutation();

  const handleDeleteContent = async (id: string) => {
    console.log("id", id);

    try {
      await deleteContent({ id }).unwrap();
      alert("Content deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete content.");
    }
  };
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
          <h2
            onClick={() => handleDeleteContent(id)}
            className="text-center p-2 border-t border-secondary w-full"
          >
            Delete
          </h2>
        </div>
      )}
    </>
  );
};

export default ContentControls;
