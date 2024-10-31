import RubricInput from "./RubricInput";

type ReviewSectionProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
};

const ReviewSection = ({ isOpen, setIsOpen, title }: ReviewSectionProps) => {
  return (
    <>
      {isOpen && (
        <section className="bg-black bg-opacity-20 h-screen fixed inset-0 top-0 flex">
          <RubricInput work={title} isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
      )}
    </>
  );
};

export default ReviewSection;
