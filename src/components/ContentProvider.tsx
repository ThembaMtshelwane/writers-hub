import { useState, useEffect } from "react";
import axios from "axios";
import CreatorCard from "./CreatorCard";
import { User, Content } from "../types";
import { IContent } from "../types";
import { useGetUserContentQuery } from "../slices/contentApiSlice_Lwa";

const ContentProvider = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [content, setContent] = useState<IContent[]>([]);

  //BUG:This needs to be checked
  const { data, isLoading } = useGetUserContentQuery();

  useEffect(() => {
    if (data?.data) setContent(data.data);
  }, [data]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get<User[]>("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchContent();
  }, []);

  console.log(!isLoading && content);
  return (
    <section className='contentCardGrid'>
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
