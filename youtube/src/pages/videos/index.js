import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { id } = useParams();

  return <div style={{ color: "white" }}>Videos</div>;
}
