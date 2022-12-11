import React from "react";
import styles from "./RelatedCard.module.css";
import ReactTimeAgo from "react-time-ago";

export default function RelatedCard({ thumbnailURL, title, chennel, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail_wrapper}>
        <img className={styles.thumbnail} alt="thumbnail" src={thumbnailURL} />
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <p className={styles.chennel}>{chennel}</p>
        <p className={styles.date}>
          <ReactTimeAgo
            date={new Date(date)}
            locale="ko"
            timeStyle="round-minute"
          />
        </p>
      </div>
    </div>
  );
}
