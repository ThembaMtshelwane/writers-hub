import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment, Content, Like, Review, User } from "../types";
import axios from "axios";
import BasicInfoCard from "../components/BasicInfoCard";
import Button from "../components/Button";
import CommentsSection from "../components/CommentsSection";

const SinglePost = () => {
  const [filteredContent, setFilteredContent] = useState<Content | null>(null);
  const [comments, setComments] = useState<Comment[] | null>([]);
  const [likes, setLikes] = useState<Like[] | null>(null);
  const [previews, setPreviews] = useState<Review[] | null>(null);

  const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);

  const { id, username } = useParams();
  const isReviwer = true;

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const users: User[] = (await axios.get("/api/users")).data;

        let matchedContent: Content | null = null;
        users.forEach((user) =>
          user.content.forEach((content) => {
            if (content.id === Number(id) && user.username === username) {
              matchedContent = content;
              setComments(content.comments);
              setLikes(content.likes);
              setPreviews(content.reviews);
            }
          })
        );
        setFilteredContent(matchedContent);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };

    fetchContent();
  }, [id, username]);

  return (
    <div>
      {filteredContent ? (
        <div>
          <BasicInfoCard
            title={filteredContent.title}
            author={username || ""}
            description={filteredContent.description}
            image={filteredContent.image}
          >
            <div className=" flex gap-5">
              <Button
                name={`Likes (${likes?.length})`}
                buttonFunction={() => console.log("likes", likes)}
              />
              <Button
                name={`Comments (${comments?.length})`}
                buttonFunction={() =>
                  setIsCommentsOpen((prevState) => !prevState)
                }
              />
              {isReviwer && (
                <Button
                  name={`Previews (${previews?.length})`}
                  buttonFunction={() => console.log("preview", previews)}
                />
              )}
            </div>
          </BasicInfoCard>

          <section>{filteredContent.body}</section>
          <CommentsSection
            isOpen={isCommentsOpen}
            setIsOpen={setIsCommentsOpen}
            data={comments}
          />
        </div>
      ) : (
        <p>No matching content found.</p>
      )}
    </div>
  );
};

export default SinglePost;
