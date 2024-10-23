// import Gravity from "../assets/Images/gravity.jpeg";

type CardProps = {
  image: string;
  title: string;
  author: string;
  desc: string;
};

const MainCard = ({ image, title, author, desc }: CardProps) => {
  return (
    <div className="contentCard">
      <div className="h-[55%] mb-3">
        <img
          src={image}
          alt={title}
          className="object-cover object-center size-full"
        />
      </div>
      <h3 className="font-bold px-2 mb-[0.10rem]">{title}</h3>
      <h4 className="text-black/50 font-medium px-2 mb-3">{author}</h4>
      <p className=" px-2">{desc}</p>
    </div>
  );
};

export default MainCard;
