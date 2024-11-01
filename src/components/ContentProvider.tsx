import { useState, useEffect } from "react";
import axios from "axios"; 
import CreatorCard from "./CreatorCard";
import { User, Content } from "../types"; 

const ContentProvider = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get<User[]>("/api/users"); 
        setUsers(response.data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
98
      }
    };

    fetchContent();
  }, []);

  return (
    <section className="contentCardGrid">

      {users.map((user: User) =>
        user.content?.map((work: Content) => (
          <CreatorCard
            key={work.id}
            name={work.title}
            description={work.description}
            isReviewed={work.isReviewed}
          />
        ))
      )}
    </section>
  );
};

export default ContentProvider;
