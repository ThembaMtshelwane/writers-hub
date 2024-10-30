import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";


const Writing: React.FC = () => {
  const [value, setValue] = useState("");
  const location = useLocation();
  const formData = location.state;




  useEffect(() => {
    const savedDraft = localStorage.getItem("draft");
    if (savedDraft) {
      setValue(savedDraft);
    }
  }, []);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ align: [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link"],
      ["clean"],
      [{ direction: "rtl" }],
    ],
  };

  const saveDraft = () => {
    localStorage.setItem("draft", value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      saveDraft();
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className=" ">
      <ReactQuill
        className="h-[40rem] p-10 "
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />

      <div className="py-5 flex justify-center sm:pt-10">
        <button className="p-2 rounded-md min-w-[80px] bg-secondary text-white hover:bg-accent ">
          Preview
        </button>
      </div>
      <div>
        <h1>{formData?.Title}</h1>
        {/* Render other fields */}
        <h1>{formData?.Description}</h1>
      </div>
    </div>
  );
};

export default Writing;
