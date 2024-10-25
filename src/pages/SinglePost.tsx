import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content, User } from "../types";
import axios from "axios";
import BasicInfoCard from "../components/BasicInfoCard";

const SinglePost = () => {
  const [filteredContent, setFilteredContent] = useState<Content | null>(null);
  const { id, username } = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const users: User[] = (await axios.get("/api/users")).data;

        let matchedContent: Content | null = null;
        users.forEach((user) =>
          user.content.forEach((content) => {
            if (content.id === Number(id) && user.username === username) {
              matchedContent = content;
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
          />
          <section>{filteredContent.body}</section>
        </div>
      ) : (
        <p>No matching content found.</p>
      )}
    </div>
  );
};

export default SinglePost;
