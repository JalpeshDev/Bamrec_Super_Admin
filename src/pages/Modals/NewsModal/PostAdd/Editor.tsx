import { Delta } from "quill";
import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState ,useEffect} from "react";

const toolbarOptions = ["bold"];

const Editor = (props: any) => {
  const [value,setValue]=useState(props.editData?.describe)

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };
  

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleProcedureContentChange = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setValue(content)   
    setTimeout(() => {
      props.editorDataChange(content);
    }, 1000);

  };
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value||""}
      onChange={handleProcedureContentChange}
    >
      <div className="my-editing-area" />
    </ReactQuill>
  );
};

export default Editor;
