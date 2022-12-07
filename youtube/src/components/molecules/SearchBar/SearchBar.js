import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Button, InputText } from "../../../components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <InputText
        className={styles.input}
        value={keyword}
        placeholder="검색"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={() => {}} className={styles.button}>
        <AiOutlineSearch className={styles.icon} />
      </Button>
    </form>
  );
}
