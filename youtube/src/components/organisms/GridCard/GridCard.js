import React from "react";
import { Link } from "react-router-dom";
import styles from "./GridCard.module.css";
import { Card } from "../../molecules";

export default function GridCard({ items }) {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => {
        const id = typeof item.id === "string" ? item.id : item.id.videoId;
        const isNotVideo = !id;

        if (isNotVideo) return null;

        return (
          <li key={index}>
            <Link to={`/videos/watch/${id}`}>
              <Card
                thumbnailURL={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                channel={item.snippet.chennelTitle}
                date={item.snippet.publishedAt}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
