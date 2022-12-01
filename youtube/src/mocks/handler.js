import { rest } from "msw";
import {
  popularVideos,
  searchedVideos,
  relatedVideos,
  video,
  channel,
} from "./data";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const makeAxiosFormat = (res, status = 200) => {
  return { data: res, status, handlers: {}, config: {}, request: {} };
};

export const handlers = [
  rest.get(`${BASE_URL}/videos`, (req, res, ctx) => {
    const isPopular = req.url.searchParams.get("chart") === "mostPopular";
    const hasId = req.url.searchParams.get("id") && true;

    if (isPopular) {
      return res(ctx.status(200), ctx.json(makeAxiosFormat(popularVideos)));
    }

    if (hasId) {
      console.log("call");
      return res(ctx.status(200), ctx.json(makeAxiosFormat(video)));
    }

    return res(ctx.status(500));
  }),

  rest.get(`${BASE_URL}/search`, (req, res, ctx) => {
    const hasKeyword = req.url.searchParams.get("q") && true;
    const hasRelated = req.url.searchParams.get("relatedToVideoId") && true;

    if (hasKeyword) {
      return res(ctx.status(200), ctx.json(makeAxiosFormat(searchedVideos)));
    }

    if (hasRelated) {
      return res(ctx.status(200), ctx.json(makeAxiosFormat(relatedVideos)));
    }

    return res(ctx.status(500));
  }),

  rest.get(`${BASE_URL}/channels`, (req, res, ctx) => {
    const hasId = req.url.searchParams.get("id") && true;
    if (hasId) {
      return res(ctx.status(200), ctx.json(makeAxiosFormat(channel)));
    }
    return res(ctx.status(500));
  }),
];
