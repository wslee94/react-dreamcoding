import React from "react";
import { Video, GridRelatedCard } from "../..";

export default function Watch() {
  return (
    <>
      <div>
        <Video videoId={id} />
      </div>
      <div>
        <GridRelatedCard />
      </div>
    </>
  );
}
