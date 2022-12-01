import { rest } from "msw";
import { popularVideos } from "./data";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const handlers = [
  rest.get(`${BASE_URL}/videos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularVideos));
  }),
];
