import axios from "axios";
import { useState, useEffect } from "react";
import BasicInfoCard from "../../components/BasicInfoCard";
import { Content, User } from "../../types";
import { Link } from "react-router-dom";

const Livefeed = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const users: User[] = (await axios.get("/api/users")).data;
        setUsers(users);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchContent();
  }, []);

  return (
    <section className="grid gap-5">
      {users.map((user: User) =>
        user?.content?.slice(0, 7).map((work: Content) => (
          <Link
            to={`/post/${user.username}/${work.id}`}
            key={`${user.username}+${work.id}`}
          >
            <BasicInfoCard
              key={work.id + work.title}
              title={work.title}
              author={user.username}
              description={work.description}
              image={work.image}
            />
          </Link>
        ))
      )}
    </section>
  );
};

export default Livefeed;
