import React from "react";
import { uploadImage } from "../api/cloudinary";

export default function InputImage({ onUpload, ...otherProps }) {
  const onChange = async (e) => {
    try {
      const res = await uploadImage({ file: e.target.files[0] });
      onUpload({
        target: {
          name: e.target.name,
          value: res.data.secure_url,
        },
      });
    } catch (err) {
      onUpload({
        target: {
          name: e.target.name,
          value: "",
        },
      });
    }
  };

  return (
    <input {...otherProps} accept="image/*" type="file" onChange={onChange} />
  );
}
