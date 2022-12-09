import React from "react";
import styles from "./Card.module.css";
import ReactTimeAgo from "react-time-ago";

export default function Card({ thumbnailURL, title, author, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail_wrapper}>
        <img className={styles.thumbnail} alt="thumbnail" src={thumbnailURL} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>
          <ReactTimeAgo date={date} locale="ko" timeStyle="round-minute" />
        </p>
      </div>
    </div>
  );
}
