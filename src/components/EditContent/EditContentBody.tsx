import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useGetContentByIDQuery,
  useUpdateContentMutation,
} from "../../slices/contentApiSlice_Lwa";

const EditContentBody = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const textRef = useRef<ReactQuill>(null);

  const { data } = useGetContentByIDQuery({ id });
  const [updateContent] = useUpdateContentMutation();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (data && data.text) {
      setValue(data.text);
    } else {
      const draft = localStorage.getItem("draft");
      if (draft) setValue(draft);
    }
  }, [data]);

  useEffect(() => {
    const saveDraft = () => localStorage.setItem("draft", value);
    const interval = setInterval(saveDraft, 1000);
    return () => clearInterval(interval);
  }, [value]);

  const handlePreview = () => {
    const editor = textRef.current?.getEditor();
    const text = editor?.getText();
    const formData = location.state;

    if (formData) {
      const dataToPreview = {
        ...formData,
        write: text,
      };
      navigate("../preview", { state: dataToPreview, replace: true });
    }
  };

  const handleSave = async () => {
    const editor = textRef.current?.getEditor();
    const text = editor?.getText();
    try {
      await updateContent({ id, data: { text: text } }).unwrap();
      alert("Content body updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update content.");
    }
  };

  return (
    <div>
      <ReactQuill
        ref={textRef}
        className="h-[40rem] p-10"
        modules={{
          toolbar: [
            [{ font: [] }],
            [{ align: [] }],
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["link"],
            ["clean"],
            [{ direction: "rtl" }],
          ],
        }}
        theme="snow"
        value={value}
        onChange={setValue}
      />

      <div className="py-5 flex justify-center sm:pt-10">
        <div className="pb-3 md:flex md:justify-center">
          <button className="buttonStyle" onClick={handleSave}>
            Save
          </button>
          <button className="buttonStyle" onClick={handlePreview}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContentBody;
