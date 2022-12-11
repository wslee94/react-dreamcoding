import { rest } from "msw";
import {
  popularVideos,
  searchedVideos,
  relatedVideos,
  video,
  channel,
} from "./data";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const handlers = [
  rest.get(`${BASE_URL}/videos`, (req, res, ctx) => {
    const isPopular = req.url.searchParams.get("chart") === "mostPopular";
    const hasId = req.url.searchParams.get("id") && true;

    if (isPopular) {
      return res(ctx.status(200), ctx.json(popularVideos));
    }

    if (hasId) {
      return res(ctx.status(200), ctx.json(video));
    }

    return res(ctx.status(500));
  }),

  rest.get(`${BASE_URL}/search`, (req, res, ctx) => {
    const hasKeyword = req.url.searchParams.get("q") && true;
    const hasRelated = req.url.searchParams.get("relatedToVideoId") && true;

    if (hasKeyword) {
      return res(ctx.status(200), ctx.json(searchedVideos));
    }

    if (hasRelated) {
      return res(ctx.status(200), ctx.json(relatedVideos));
    }

    return res(ctx.status(500));
  }),

  rest.get(`${BASE_URL}/channels`, (req, res, ctx) => {
    const hasId = req.url.searchParams.get("id") && true;
    if (hasId) {
      return res(ctx.status(200), ctx.json(channel));
    }
    return res(ctx.status(500));
  }),
];
