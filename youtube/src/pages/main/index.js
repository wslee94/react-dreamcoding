import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVideosByPopular } from "../../api";
import { querykeys } from "../../contants";
import { GridCard } from "../../components";

export default function Main() {
  const [list, setList] = useState([]);
  useQuery({
    queryKey: [querykeys.FETCH_POPULAR_VIDEO],
    queryFn: getVideosByPopular,
    onSuccess: (data) => setList(data?.data?.items),
    onError: (data) => setList([]),
  });

  return (
    <div>
      <GridCard items={list} />
    </div>
  );
}
