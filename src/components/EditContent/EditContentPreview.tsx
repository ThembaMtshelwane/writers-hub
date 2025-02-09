import { useParams } from "react-router-dom";
import { useGetContentByIDQuery } from "../../slices/contentApiSlice_Lwa";
import BasicInfoCard from "../BasicInfoCard";
import { Spinner } from "flowbite-react";

const EditContentPreview = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetContentByIDQuery(
    { id: id || "" },
    { skip: !id }
  );


  if (isLoading) return <Spinner />;

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <BasicInfoCard
        title={data.title}
        author={data.author}
        description={data.description}
        image={data.image}
      />
      {data?.text}
    </div>
  );
};

export default EditContentPreview;
