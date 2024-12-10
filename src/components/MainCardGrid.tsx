import MainCard from "./MainCard";
// import maincard from "../maincard.json";|

import { useEffect, useState } from "react";
import { IContent } from "../types";
// import axios from "axios";
// import useFetch from "../hooks/useFetch";
import { useGetAllContentQuery } from "../slices/contentApiSlice_Lwa";
import SpinnerComponent from "./SpinnerComponent";

/* Hey Hilton, I changed a few things here, was possible undefined so I added some code to resolve that i.e. content?  and the two lines below*/
// let authorName = "";
// let username = "";

const MainCardGrid = () =>
  //   {
  //   search,
  //   selectedFilter,
  // }: {
  //   search: string | "";
  //   selectedFilter: string[];
  // }
  {
    const [content, setContent] = useState<IContent[]>([]);
    // const { data, loading, error } = useFetch<User[]>("/api/users");

    const { data, isLoading } = useGetAllContentQuery();

    useEffect(() => {
      if (data?.data) setContent(data.data);
    }, [data]);
    // if (!data || data.length === 0) return <p>No data available</p>;
    // if (error) {
    //   console.log("Error: ", error);
    //   return <p>Error: {error}</p>;
    // }
    // if (loading) return <p>Loading...</p>;

    // const filteredContent = data.flatMap((user) =>
    //   user.content?.filter((cont) => {
    //     const searchQuery = cont.title
    //       .toLowerCase()
    //       .includes(search.toLowerCase());

    //     const matchType =
    //       selectedFilter.length === 0 ||
    //       selectedFilter.includes(cont.type.id) ||
    //       cont.genres.some((genre) => selectedFilter.includes(genre.id));

    //     return searchQuery && matchType;
    //   })
    // );

    console.log(content);
    return (
      <div className='contentCardGrid'>
        {isLoading ? (
          <SpinnerComponent />
        ) : content.length > 0 ? (
          content.map((con, index) => (
            <MainCard
              key={index}
              title={con?.title || ""}
              author={
                con?.userId?.firstName + " " + con?.userId?.lastName || ""
              }
              image={con?.image || ""}
              desc={con?.description || ""}
              username={con?.userId?.username || ""}
              id={con?._id || ""}
            />
          ))
        ) : (
          <p>No data to display.</p>
        )}

        {/* {isLoading ? (
          <SpinnerComponent />
        ) : content && content.length > 0 ? (
          content.map((con: Content[], index: number) => {
            <MainCard
              key={index}
              title={con?.title || ""}
              author={authorName || ""}
              image={con?.image || ""}
              desc={con?.description || ""}
              username={username || ""}
              id={con?.id || 0}
            />;
          })
        ) : (
          <p>No data to show!</p>
        )} */}
      </div>
    );
  };

export default MainCardGrid;
