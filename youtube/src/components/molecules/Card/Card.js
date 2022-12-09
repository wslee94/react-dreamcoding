import React from "react";
import styles from "./Card.module.css";

export default function Card({ thumbnailURL, title, author, date }) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail_wrapper}>
        <img className={styles.thumbnail} alt="thumbnail" src={thumbnailURL} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>{timeAgo.format(date)}</p>
      </div>
    </div>
  );
}
