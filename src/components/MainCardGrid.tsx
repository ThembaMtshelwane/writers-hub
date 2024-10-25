import MainCard from "./MainCard";
// import maincard from "../maincard.json";
import { useEffect, useState } from "react";
import { User } from "../types";
import axios from "axios";

const MainCardGrid = () => {
  const [content, setContent] = useState<User[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await axios.get("/api/users");
        setContent(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className="contentCardGrid">
      {content.map((con) => {
        return con.content.map((cont, index) => (
          <MainCard
            key={index}
            title={cont.title}
            author={con.first_name + " " + con.last_name}
            image={cont.image}
            desc={cont.description}
          />
        ));
      })}

      {/* {maincard.map((book) => {
        return (
          <MainCard
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            desc={book.desc}
          />
        );
      })} */}
    </div>
  );
};

export default MainCardGrid;
