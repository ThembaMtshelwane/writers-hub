import { useNavigate, useParams } from "react-router-dom";
import {
  useGetContentByIDQuery,
  useUpdateContentMutation,
} from "../../slices/contentApiSlice_Lwa";
import { useEffect, useState } from "react";

interface ContentData {
  title?: string;
  description?: string;
  image?: string;
}

const EditContentBasicInfo = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetContentByIDQuery({ id: id || "" }, { skip: !id });
  const navigate = useNavigate();
  const [updateContent] = useUpdateContentMutation();

  const [formData, setFormData] = useState<ContentData>({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || "",
        description: data.description || "",
        // image: data.image || "",
      });
    }
  }, [data]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData((prev) => ({ ...prev, image: reader.result as string }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);

    if (!id) return alert("Invalid content ID.");
    try {
      await updateContent({ id, data: formData }).unwrap();
      alert("Basic info updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update content.");
    }
  };

  return (
    <section>
      <div>
        <h1>EDIT {formData.title}</h1>
        <label htmlFor="file-upload">
          <img
            src={
              formData.image ||
              "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png"
            }
            alt="Upload Placeholder"
            className=""
          />
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            // onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        <form onSubmit={handleSave}>
          <label htmlFor="title">
            Title
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              aria-label="Title input"
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              aria-label="Description input"
            />
          </label>
          <div>
            <button type="submit" className="buttonStyle">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("../write", { state: formData })}
              className="buttonStyle"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditContentBasicInfo;
