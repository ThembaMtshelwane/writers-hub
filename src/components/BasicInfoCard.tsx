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
    <div className="grid sm:grid-cols-1 lg:grid-cols-7 gap-4  bg-white border w-full ">
      <div className="col-span-1 grid place-content-center  lg:place-content-start">
        <img className="w-full lg:w-[96]" src={image} />
      </div>

      <div className="mt-7 space-y-2 py-2 md:col-span-2 md:text-left md:p-1  lg:col-span-4 ml-6 w-full">
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
