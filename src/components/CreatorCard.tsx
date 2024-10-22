type Props = {
  name: string;
  description: string;
};

const CreatorCard = ({ name, description }: Props) => {
  return (
    <section className="grid grid-rows-[1fr_4fr] border-2 w-[300px] h-[480px] p-3 rounded-lg ">
      <h2 className="font-bold text-4xl mb-6 self-center">{name}</h2>
      <p>{description}</p>
    </section>
  );
};

export default CreatorCard;
