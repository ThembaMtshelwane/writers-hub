import { ReactNode } from "react";

type BasicinfoCardProps = {
  title: string;
  author: string;
  description: string;
  image: string;
  children?: ReactNode;
};

const BasicInfoCard = ({
  title,
  author,
  description,
  image,
  children,
}: BasicinfoCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[30%_60%] md:grid-cols-[40%_60%] gap-4  bg-white border w-full ">
      
        <img className="w-full h-full object-cover object-center max-w-[320px] max-h-[480px] mx-auto " src={image} />


      <div className="mt-7 space-y-2 p-4 w-full">
        <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
        <h2 className="font-thin text-gray-500 text-md lg:text-lg  capitalize">
          {author}
        </h2>
        <div>{}</div>
        <h3 className=" text-sm lg:p-0 sm:col-span-1 place-content-center ">
          {description}
        </h3>

        <div className="space-x-4 space-y-2">{children}</div>
      </div>
    </div>
  );
};

export default BasicInfoCard;
