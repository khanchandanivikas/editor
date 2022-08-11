import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    // [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" }
    //   { indent: "-1" },
    //   { indent: "+1" },
    ],
    ["link", "image", "video"]
    // ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
//   "font",
//   "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
//   "indent",
  "link",
  "image",
  "video"
];
const Editor = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      theme="snow"
      modules={modules}
      formats={formats}
    />
  );
};

export default Editor;
