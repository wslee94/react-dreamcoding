import axios from "axios";

export const uploadImage = ({ file }) => {
  return axios.post(
    "https://api.cloudinary.com/v1_1/dbevajzao/image/upload",
    {
      file,
      upload_preset: "k7uogud2",
      api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
