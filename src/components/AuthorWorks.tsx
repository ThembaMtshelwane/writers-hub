type Props = {
  image: string;
  title: string;
  AuthorName: string;
  description: string;
};

const AuthorWorks = ({ image, title, AuthorName, description }: Props) => {
  return (
    <section className="flex  px-10">
      <div>
        <img src={image} className="h-20 w-20  " />
      </div>
      <div className="bg-white w-80">
        <div className=" mx-2 p-2 my-2 flex flex-col">
          <h2 className="text-xl">{title}</h2>
          <h3 className="text-sm">{AuthorName}</h3>
          <p className="font-body w-[200px] hidden">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AuthorWorks;
