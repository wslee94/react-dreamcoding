import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getVideosByKeyword } from "../../api";
import { querykeys } from "../../contants";
import { GridCard } from "../../components";

export default function Videos() {
  const [list, setList] = useState([]);
  const { keyword } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [querykeys.FETCH_KEYWORD_VIDEO],
    queryFn: () => getVideosByKeyword({ keyword }),
    onSuccess: (data) => setList(data?.data?.items),
    onError: () => setList([]),
  });

  return (
    <div>
      <GridCard items={list} />
    </div>
  );
}
