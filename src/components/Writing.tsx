import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "./Button";
import {  useLocation, useNavigate } from "react-router-dom";


const Writing: React.FC = () => {
  const [value, setValue] = useState("");
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();
  const  textRef = useRef<ReactQuill>(null)

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

  const handlePreview = () => {


    const qui = textRef.current?.getEditor();
    const text =  qui?.getText();


    const dataToPreview = {
      Write: text ,
      Title: formData?.Title,
      Description: formData?.Description,
    };
    navigate("/post/preview", { state: dataToPreview, replace:true });
  };



  return (
    <div className="">
      <ReactQuill
      ref={textRef}
        className="h-[40rem] p-10"
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />

      <div className="py-5 flex justify-center sm:pt-10">
        <div className="pb-3 md:flex md:justify-center">
          <Button name="preview" buttonFunction={handlePreview} />
        </div>
      </div>
    </div>
  );
};

export default Writing;
