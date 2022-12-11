import React from "react";
import styles from "./Card.module.css";
import ReactTimeAgo from "react-time-ago";

export default function Card({ thumbnailURL, title, channel, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail_wrapper}>
        <img className={styles.thumbnail} alt="thumbnail" src={thumbnailURL} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channel}</p>
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
