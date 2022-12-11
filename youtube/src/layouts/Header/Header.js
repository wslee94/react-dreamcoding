import React from "react";
import styles from "./Header.module.css";
import { SearchBar } from "../../components";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            alt="logo"
            src="/assets/logo/youtube.svg"
          />
          <span className={styles.logoText}>Youtube</span>
        </div>
        <SearchBar className={styles.searchBar} />
      </div>
      <div className={styles.line} />
    </>
  );
}
