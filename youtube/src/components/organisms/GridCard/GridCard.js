import React from "react";
import styles from "./GridCard.module.css";
import { Card } from "../../molecules";

export default function GridCard({ items }) {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index}>
          <Card
            thumbnailURL={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            author={item.snippet.chennelTitle}
            date={item.snippet.publishedAt}
          />
        </li>
      ))}
    </ul>
  );
}
