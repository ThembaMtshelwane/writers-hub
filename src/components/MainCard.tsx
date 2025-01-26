// import Gravity from "../assets/Images/gravity.jpeg";

import { Link } from "react-router-dom";
import ContentControls from "./ContentControls";

type CardProps = {
  id: string;
  image: string;
  title: string;
  author: string;
  desc: string;
  username: string;
};

const MainCard = ({ image, title, author, desc, username, id }: CardProps) => {
  return (
    <div className="contentCard">
      <ContentControls username={username} id={id} />
      <Link to={`/post/${username}/${id}`}>
        <div className="h-[55%] mb-3 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover object-center size-full"
          />
        </div>
        <h3 className="font-bold px-2 mb-[0.10rem]">{title}</h3>
        <h4 className="text-black/50 font-medium px-2 mb-3">
          {author} ({username})
        </h4>
        <p className="px-2">{desc}</p>
      </Link>
    </div>
  );
};

export default MainCard;
