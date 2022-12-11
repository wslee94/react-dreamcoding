import React, { useEffect } from "react";
import { SearchBar, GridRelatedCard, Video } from "../../components";
import { useQuery } from "@tanstack/react-query";

import {
  getVideosByPopular,
  getVideosByKeyword,
  getVideosByRelated,
  getVideo,
  getChannel,
} from "../../api";

export default function Components() {
  useEffect(() => {
    // getVideosByPopular({}).then(console.log);
    // getVideosByKeyword({ keyword: "울랄라" }).then(console.log);
    // getVideosByRelated({ id: "1sadasd" }).then(console.log);
    // getChannel({ id: "1sadasd" }).then(console.log);
    // getVideo({ id: "1sadasd" }).then(console.log);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["FETCH_POPULAR_VIDEO"],
    queryFn: getVideosByPopular,
  });

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
