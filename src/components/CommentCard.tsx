type CommentCardProps = {
  avatar: string;
  username: string;
  text: string;
  date: string;
};
const CommentCard = ({ avatar, username, text, date }: CommentCardProps) => {
  return (
    <div className="bg-[#F2F8F3]">
      <div className="grid sm:grid-cols-1 lg:grid-cols-7 gap-4  bg-white p-4">
        <div className="col-span-1 grid place-content-center">
          <img className="rounded-full w-20 sm:w-24 md:w-28" src={avatar} />
        </div>
        <div className="  space-y-2  md:col-span-2 md:text-left md:p-1 lg:col-span-4 lg:p-3 ">
          <h1 className="text-sm md:text-md font-semibold text-gray-500 ">
            {username}
          </h1>
          <p>{date}</p>
          <p className="mt-2 text-[10px] sm:text-sm ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
