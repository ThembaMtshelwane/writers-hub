import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Writing: React.FC = () => {
  const content = {
    _id: "demo ",
    userId: {
      username: "demo ",
      firstName: "demo ",
      lastName: "demo ",
    },
    userName: "demo ",
    author: "demo ",
    title: "demo ",
    description: "demo ",
    image:
      "https://images.unsplash.com/photo-1727206407683-490abfe0d682?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "demo",
    genres: [
      { id: "1", name: "g1" },
      { id: "2", name: "g2" },
      { id: "3", name: "g3" },
    ],
    likesCount: 0,
    commentsCount: 0,
    text: "demo ",
  };

  const [value, setValue] = useState(content.text || "");
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();
  const textRef = useRef<ReactQuill>(null);

  console.log(formData);
  // useEffect(() => {
  //   const savedDraft = localStorage.getItem("draft");
  //   if (savedDraft) {
  //     setValue(savedDraft);
  //   }
  // }, []);

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

  useEffect(() => {
    //TODO: ask Caps WAGWAN
    const saveDraft = () => {
      localStorage.setItem("draft", value);
    };
    const interval = setInterval(() => {
      saveDraft();
    }, 1000);

    return () => clearInterval(interval);

    // if (!formData) {
    //   const savedData = localStorage.getItem("formData");
    //   if (savedData) {
    //     navigate("/write", { state: JSON.parse(savedData) });
    //   } else {
    //     console.error("No data found in localStorage or location.state");
    //   }
    // }
  }, [value]);
  // }, [formData, navigate]);

  const handlePreview = () => {
    const qui = textRef.current?.getEditor();
    const text = qui?.getText();

    const dataToPreview = {
      title: formData?.Title,
      genres: formData?.selectedGenre,
      type: formData?.Type,
      description: formData?.Description,
      image: formData?.image,
      base64: formData?.base64,
      write: text || content.text,
    };
    navigate("/post/preview", { state: dataToPreview, replace: true });
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
