import MainCard from "./MainCard";
// import maincard from "../maincard.json";|

import { useEffect, useState } from "react";
import { User } from "../types";
import axios from "axios";

const MainCardGrid = ({
  search,
  selectedFilter,
}: {
  search: string;
  selectedFilter: string[];
}) => {
  const [content, setContent] = useState<User[]>([]);
  console.log(search);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // const url = search.
        const { data } = await axios.get("/api/users");
        setContent(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchContent();
  }, []);

  const filteredContent = content.flatMap((user) =>
    user.content.filter((cont) => {
      const searchQuery = cont.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchType =
        selectedFilter.length === 0 || selectedFilter.includes(cont.type);
      return searchQuery && matchType;
    })
  );

  return (
    <div className="contentCardGrid">
      {filteredContent.length > 0 ? (
        filteredContent.map((con, index) => {
          const authorUser = content.find((user) => user.content.includes(con));

          const authorName = authorUser
            ? `${authorUser.first_name} ${authorUser.last_name}`
            : "Unknown Author";

          return (
            <MainCard
              key={index}
              title={con.title}
              author={authorName}
              image={con.image}
              desc={con.description}
            />
          );
        })
      ) : (
        <div>No Book found</div>
      )}
    </div>
  );
};

export default MainCardGrid;
