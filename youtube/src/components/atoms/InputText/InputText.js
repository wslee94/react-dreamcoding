import React from "react";
import styles from "./InputText.module.css";

export default function InputText({
  value,
  onChange,
  placeholder,
  ...otherProps
}) {
  const className = otherProps.className
    ? [styles.input, otherProps.className].join(" ")
    : styles.input;

  return (
    <input
      {...otherProps}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
