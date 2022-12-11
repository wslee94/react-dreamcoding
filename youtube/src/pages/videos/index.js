import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getVideosByKeyword } from "../../api";
import { querykeys } from "../../contants";
import { GridCard } from "../../components";

export default function Videos() {
  const { keyword } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [querykeys.FETCH_KEYWORD_VIDEO],
    queryFn: () => getVideosByKeyword(keyword),
  });

  return (
    <div>
      <GridCard items={data?.data?.items || []} />
    </div>
  );
}
