import { SwipeableDrawer } from "@mui/material"; // Ensure @mui/material is installed
import "tailwindcss/tailwind.css"; // Ensure Tailwind is configured
import { Comment } from "../types";
import CommentCard from "./CommentCard";
import { useState } from "react";

type CommentsSectionProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: Comment[] | null;
};
const userData = {
  id: "01deb714-e519-446a-bd52-76fd4beb2856",
  username: "rstrapp0",
  first_name: "Raven",
  last_name: "Strapp",
  avatar: "https://robohash.org/optioillumat.png?size=80x80&set=set1",
};
const CommentsSection = ({ isOpen, setIsOpen, data }: CommentsSectionProps) => {
  const [commentData, setCommentData] = useState<Comment>({
    id: userData.id,
    username: userData.username,
    avatar: userData.avatar,
    date: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentData((prevData) => ({
      ...prevData,
      date: new Date().toDateString(),
      [name]: value,
    }));
  };
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

  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(commentData);
    setCommentData({
      id: userData.id,
      username: userData.username,
      avatar: userData.avatar,
      date: "",
      text: "",
    })
    
  };

  const list = () => (
    <div className="w-full h-[50vh] overflow-y-auto relative  bg-gray-100 p-4 flex items-center justify-center">
      <div className="absolute top-0 flex flex-col gap-5 m-6 justify-center mx-auto p-4 md:w-[90%] my-4">
        <h2 className="text-3xl my-4 font-bold">{data?.length} Comments </h2>
        {data !== null ? (
          data.map((comment: Comment) => (
            <CommentCard
              key={comment.id}
              avatar={comment.avatar}
              username={comment.username}
              text={comment.text}
              date={comment.date}
            />
          ))
        ) : (
          <p>No comments yet</p>
        )}
        <form className="flex mx-4 mb-6" onSubmit={addComment}>
          <textarea
            name="text"
            id=""
            className="w-full p-4 border-secondary"
            onChange={handleChange}
            value={commentData.text}
            required
          ></textarea>
          <button type="submit" className="buttonStyle">
            Send
          </button>
        </form>
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
