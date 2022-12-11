import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVideosByPopular } from "../../api";
import { querykeys } from "../../contants";
import { GridCard } from "../../components";

export default function Main() {
  const { data, isLoading } = useQuery({
    queryKey: [querykeys.FETCH_POPULAR_VIDEO],
    queryFn: getVideosByPopular,
  });

  return (
    <div style={{ color: "white" }}>
      <GridCard items={data?.data?.items || []} />
    </div>
  );
}
