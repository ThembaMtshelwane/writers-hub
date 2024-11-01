import MainCard from "./MainCard";
// import maincard from "../maincard.json";|

// import { useEffect, useState } from "react";
import { User } from "../types";
// import axios from "axios";
import useFetch from "../hooks/useFetch";

const MainCardGrid = ({
  search,
  selectedFilter,
}: {
  search: string | "";
  selectedFilter: string[];
}) => {
  const { data, loading, error } = useFetch<User[]>("/api/users");

  if (!data || data.length === 0) return <p>No data available</p>;
  if (error) {
    console.log("Error: ", error);
    return <p>Error: {error}</p>;
  }
  if (loading) return <p>Loading...</p>;

  const filteredContent = data.flatMap((user) =>
    user.content.filter((cont) => {
      const searchQuery = cont.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchType =
        selectedFilter.length === 0 ||
        selectedFilter.includes(cont.type.id) ||
        cont.genres.some((genre) => selectedFilter.includes(genre.id));

      return searchQuery && matchType;
    })
  );

  return (
    <div className="contentCardGrid">
      {filteredContent.length > 0 ? (
        filteredContent.map((con, index) => {
          const authorUser = data.find((user) => user.content.includes(con));
          const authorName: string = authorUser
            ? `${authorUser.first_name} ${authorUser.last_name}`
            : "Unknown Author";
          const username = authorUser?.username || "Unknown Author";

          return (
            <MainCard
              key={index}
              title={con.title}
              author={authorName}
              image={con.image}
              desc={con.description}
              username={username}
              id={con.id}
            />
          );
        })
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};

export default MainCardGrid;
