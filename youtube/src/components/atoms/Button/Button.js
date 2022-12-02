import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, ...otherProps }) {
  const className = otherProps.className
    ? [styles.button, otherProps.className].join(" ")
    : styles.button;

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
}
