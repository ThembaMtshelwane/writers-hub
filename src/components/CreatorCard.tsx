type Props = {
  name: string;
  description: string;
};

const CreatorCard = ({ name, description }: Props) => {
  return (
    // <section className={`contentCard px-4 ${isReviewed ? 'bg-green-200' : 'bg-red-200'}`}>
    //   <h2 className="font-bold text-4xl my-4 self-center">{name}</h2>
    //   <p>{description}</p>
    // </section>
    <section className={`contentCard px-4`}>
      <h2 className='font-bold text-4xl my-4 self-center'>{name}</h2>
      <p>{description}</p>
    </section>
  );
};

export default CreatorCard;
