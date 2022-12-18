import axios from "axios";

export default class YoutubeClient {
  constructor() {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  search(params) {
    return this.httpClient.get("search", params);
  }

  videos(params) {
    return this.httpClient.get("videos", params);
  }
}
