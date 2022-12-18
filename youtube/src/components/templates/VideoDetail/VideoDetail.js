import React from "react";
import styles from "./VideoDetail.module.css";
import { Video, GridRelatedCard } from "../../../components";

export default function Watch({ detail, chennel, relatedVideos }) {
  return (
    <div className={styles.container}>
      <div className={styles.playerWrapper}>
        <Video videoId={detail.id} />
        <div className={styles.contentWrapper}>
          <p className={styles.title}>{detail.title}</p>
          <div className={styles.chennelWrapper}>
            <img
              alt="channel"
              className={styles.channelLogo}
              src={chennel.thumbnails?.high?.url || ""}
            />
            <span className={styles.channelTitle}>{chennel.title}</span>
          </div>
          <p className={styles.description}>{detail.description}</p>
        </div>
      </div>
      <div className={styles.relatedVideosWrapper}>
        <GridRelatedCard items={relatedVideos} />
      </div>
    </div>
  );
}
