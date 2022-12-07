import React, { useEffect } from "react";
import { SearchBar, GridCard } from "../../components";

// import {
//   getVideosByPopular,
//   getVideosByKeyword,
//   getVideosByRelated,
//   getVideo,
//   getChannel,
// } from "../../api";

export default function Main() {
  useEffect(() => {
    // getVideosByPopular({}).then(console.log);
    // getVideosByKeyword({ keyword: "울랄라" }).then(console.log);
    // getVideosByRelated({ id: "1sadasd" }).then(console.log);
    // getChannel({ id: "1sadasd" }).then(console.log);
    // getVideo({ id: "1sadasd" }).then(console.log);
  }, []);

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <GridCard />
      </div>
    </>
  );
}
