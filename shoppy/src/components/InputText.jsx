import React from "react";

export default function InputText(props) {
  return (
    <input
      className="border-solid border border-black-500 p-2 text-sm"
      type="text"
      {...props}
    />
  );
}
