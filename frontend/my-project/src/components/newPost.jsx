import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = () => {
  const [value, setValue] = useState("Enter new post");

  return (
    <div className="top-20 relative heightFull">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className=" w-1/2 m-auto h-32 "
      ></ReactQuill>
    </div>
  );
};
