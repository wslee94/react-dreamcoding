import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVideo, getVideosByRelated, getChannel } from "../../../api";
import { querykeys } from "../../../contants";
import { VideoDetail } from "../../../components";

export default function Videos() {
  const [detail, setDetail] = useState({});
  const [chennel, setChennel] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useQuery({
    queryKey: [querykeys.FETCH_VIDEO, id],
    queryFn: () => getVideo({ id }),
    onSuccess: (data) => setDetail(data?.data?.items[0]?.snippet),
    onError: () => setDetail({}),
    enabled: !!id,
  });

  useQuery({
    queryKey: [querykeys.FETCH_RELATED_VIDEO, id],
    queryFn: () => getVideosByRelated({ id }),
    onSuccess: (data) => setRelatedVideos(data?.data?.items),
    onError: () => setRelatedVideos([]),
    enabled: !!id,
  });

  useQuery({
    queryKey: [querykeys.FETCH_CHENNEL, id],
    queryFn: () => getChannel({ id: detail.channelId }),
    onSuccess: (data) => setChennel(data?.data?.items[0].snippet),
    onError: () => setChennel({}),
    enabled: !!detail.channelId,
  });

  return (
    <div>
      <VideoDetail
        detail={{ ...detail, id }}
        chennel={chennel}
        relatedVideos={relatedVideos}
      />
    </div>
  );
}
