import React, { useEffect /*useState*/ } from "react";
import BasicInfoCard from "./BasicInfoCard";
// import img1 from "../assets/Images/Robert-Frost-Portrait-Square.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useCreateContentMutation } from "../slices/contentApiSlice_Lwa";

const Preview: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dataToPreview = location.state || {};
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [addContent, { isLoading }] = useCreateContentMutation();

  const handleSubmit = async () => {
    const dataToSave = {
      userId: userInfo?._id,
      userName: userInfo?.username,
      author: userInfo?.firstName + " " + userInfo?.lastName,
      title: dataToPreview?.title,
      description: dataToPreview?.description,
      image: dataToPreview?.image,
      type: dataToPreview?.type,
      genres: dataToPreview?.genres,
      text: dataToPreview.write,
    };

    // setSubmittedData(dataToSave);
    console.log(dataToSave);

    try {
      await addContent({
        title: dataToPreview?.title,
        description: dataToPreview?.description,
        image: dataToPreview?.image,
        type: dataToPreview?.type,
        genres: [dataToPreview?.genres],
        text: dataToPreview.write,
      }).unwrap();
      navigate("/index");
    } catch (error) {
      console.error(error);
      // if (error && typeof error === "object" && "data" in error) {
      //   toast.error((error as { data: { message: string } }).data.message);
      // } else {
      //   toast.error(`An unexpected error occurred: ${error}`);
      // }
    }
  };

  useEffect(() => {
    if (!location.state) {
      const savedPreviewData = localStorage.getItem("previewData");
      if (savedPreviewData) {
        navigate("/post/preview", { state: JSON.parse(savedPreviewData) });
      } else {
        console.error("No data found in localStorage or location.state");
      }
    }
  }, [location.state, navigate]);

  return (
    <section className=''>
      <div className='border'>
        <div>
          <BasicInfoCard
            title={dataToPreview?.title}
            author={userInfo?.firstName + " " + userInfo?.lastName || " "}
            description={dataToPreview?.description}
            image={dataToPreview?.image}
          />
        </div>
        <div className='py-5 text-start '>
          <p className='text-sm '>{dataToPreview.write}</p>
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className='flex justify-center py-10'>
        <button
          className='p-2 rounded-md min-w-[80px] bg-secondary text-white hover:bg-accent'
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default Preview;
