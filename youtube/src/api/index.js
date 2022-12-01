import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getVideosByPopular = ({ regionCode = "KR", maxResults = 25 }) => {
  return instance.get(
    `/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${API_KEY}`
  );
};

export const getVideosByKeyword = ({ keyword, maxResults = 25 }) => {
  return instance.get(
    `/search?part=snippet&maxResults=${maxResults}&q=${keyword}&key=${API_KEY}`
  );
};

export const getVideosByRelated = ({ id, maxResults = 25 }) => {
  return instance.get(
    `/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=${maxResults}&key=${API_KEY}`
  );
};

export const getVideo = ({ id }) => {
  return instance.get(`/videos?part=snippet&id=${id}&key=${API_KEY}`);
};

export const getChannel = ({ id }) => {
  return instance.get(`/channels?part=snippet&id=${id}&key=${API_KEY}`);
};
