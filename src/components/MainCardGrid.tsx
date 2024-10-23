import MainCard from "./MainCard";
import maincard from "../maincard.json";

const MainCardGrid = () => {
  console.log(maincard);
  return (
    <div className="contentCardGrid">
      {maincard.map((book) => {
        return (
          <MainCard
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            desc={book.desc}
          />
        );
      })}
    </div>
  );
};

export default MainCardGrid;
