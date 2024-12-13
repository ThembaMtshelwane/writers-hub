import { useState, useEffect } from "react";
import CreatorCard from "./CreatorCard";
import { IContent } from "../types";
import { useGetUserContentQuery } from "../slices/contentApiSlice_Lwa";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SpinnerComponent from "./SpinnerComponent";

const ContentProvider = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const [content, setContent] = useState<IContent[]>([]);
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { data, isLoading } = useGetUserContentQuery();

  console.log(useGetUserContentQuery());

  useEffect(() => {
    if (userInfo && data?.data) setContent(data.data);
  }, [data, userInfo]);

  return (
    <section className='contentCardGrid'>
      {isLoading ? (
        <SpinnerComponent />
      ) : content ? (
        content.map((con, index) => (
          <CreatorCard
            key={index}
            name={con.title}
            description={con.description}
            // isReviewed={con.isReviewed}
          />
        ))
      ) : (
        <p>No data to show</p>
      )}
    </section>
  );
};

export default ContentProvider;
