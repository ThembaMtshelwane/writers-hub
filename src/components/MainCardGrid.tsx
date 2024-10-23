import MainCard from "./MainCard";
import maincard from "../maincard.json";

const MainCardGrid = () => {
  console.log(maincard);
  return (
    <div className="grid grid-cols-layout gap-5  lg:w-[70%] border-2 border-red-500 justify-center lg:ml-auto mb-20">
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
