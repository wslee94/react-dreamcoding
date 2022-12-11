import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Button, InputText } from "../../../components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ onSubmit, ...otherProps }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const className = otherProps.className
    ? [styles.form, otherProps.className].join(" ")
    : styles.form;

  return (
    <form className={className} autoComplete="off" onSubmit={handleSubmit}>
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
