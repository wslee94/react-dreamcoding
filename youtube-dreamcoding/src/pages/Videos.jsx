import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../api/fakeYoutubeClient";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <div>
      Videos {keyword ? `🔍${keyword}` : "🔥"}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 🥹</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <VideoCard video={video} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
