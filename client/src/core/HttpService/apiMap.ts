import { ApiMap } from "./http.interface";

const prefix = "http://localhost:4000";

export const apiMap: ApiMap = {
  cryptoMarket: {
    url: `${prefix}/cryptocurrencies?count=<%= count %>&offset=<%= offset %>`,
    method: "get",
  },
  trendingTickers: {
    url: `${prefix}/trending-tickers`,
    method: "get",
  },
  symbolHistory: {
    url: `${prefix}/symbol-history?symbol=<%= symbol %>`,
    method: "get",
  },
  searchAutoComplete: {
    url: `${prefix}/search?q=<%= q %>`,
    method: "get",
  },
  login: {
    url: `${prefix}/login`,
    method: "post",
  },
  register: {
    url: `${prefix}/register`,
    method: "post",
  },
};
