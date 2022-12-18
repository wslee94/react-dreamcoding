import React from "react";
import styles from "./Video.module.css";

export default function Video({ videoId }) {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        type="text/html"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        frameBorder="0"
        title={videoId}
      />
    </div>
  );
}
