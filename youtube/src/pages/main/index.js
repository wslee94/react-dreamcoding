import React, { useEffect } from "react";
import { getVideosByPopular } from "../../api";

export default function Main() {
  useEffect(() => {
    getVideosByPopular({}).then((res) => console.log(res));
  }, []);

  return <div>main</div>;
}
