import React from "react";
import styles from "./style.module.css";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
