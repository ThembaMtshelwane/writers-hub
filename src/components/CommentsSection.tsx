import { SwipeableDrawer } from "@mui/material"; // Ensure @mui/material is installed
import "tailwindcss/tailwind.css"; // Ensure Tailwind is configured
import { Comment } from "../types";
import CommentCard from "./CommentCard";

type CommentsSectionProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: Comment[] | null;
};
const CommentsSection = ({ isOpen, setIsOpen, data }: CommentsSectionProps) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  const list = () => (
    <div className="w-full h-[50vh] overflow-y-auto relative  bg-gray-100 p-4 flex items-center justify-center">
      <div className="absolute top-0 flex flex-col gap-5 m-6 justify-center border-2 border-black mx-auto w-[70%]">
        <h2 className="text-3xl my-4 font-bold">{data?.length} Comments </h2>
        {data !== null ? (
          data.map((comment: Comment) => (
            <CommentCard
              avatar={comment.avatar}
              username={comment.username}
              text={comment.text}
              date={comment.date}
            />
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default CommentsSection;
