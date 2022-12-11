import React, { useEffect } from "react";
import { SearchBar, GridRelatedCard, Video } from "../../components";

export default function Components() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <GridRelatedCard />
      </div>
      <div>
        <Video videoId="HFcJImsgm3E" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img alt="logo" width={48} height={48} src="/assets/logo/youtube.svg" />
        <span
          style={{ fontSize: "1.8rem", color: "white", fontWeight: "bold" }}
        >
          Youtube
        </span>
      </div>
    </>
  );
}
