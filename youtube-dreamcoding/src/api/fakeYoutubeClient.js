import axios from "axios";

export default class FakeYoutubeClient {
  search() {
    return axios.get("/videos/search.json");
  }

  videos() {
    return axios.get("/videos/popular.json");
  }
}
