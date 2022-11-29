import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const getVideosByPopular = ({ regionCode = "KR", maxResults = 25 }) => {
  return axios.get(
    `/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${API_KEY}`
  );
};

export const getVideosByKeyword = ({ keyword, maxResults = 25 }) => {
  return axios.get(
    `/search?part=snippet&maxResults=${maxResults}&q=${keyword}&key=${API_KEY}`
  );
};

export const getVideosByRelated = ({ id, maxResults = 25 }) => {
  return axios.get(
    `/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=${maxResults}&key=${API_KEY}`
  );
};

export const getChannel = ({ id }) => {
  return axios.get(`/channels?part=snippet&id=${id}&key=${API_KEY}`);
};
