import React from "react";
import styles from "./SearchBar.module.css";
import { Button } from "../../../components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Button onClick={() => {}} className={styles.button}>
        <AiOutlineSearch className={styles.icon} />
      </Button>
    </form>
  );
}
