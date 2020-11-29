import { ScrapeOptions } from "../types/scrapeOption.interace";
import { stockDataTemplates } from "./stockDataTemplates";

export const scrapeOptions: ScrapeOptions = {
  TRENDING_TICKERS: {
    url: "https://finance.yahoo.com/trending-tickers",
    waitForSelector: ".yfinlist-table",
    evalSelector: ".yfinlist-table > tbody > tr",
    evalCallback: (trs: Element[], type) =>
      trs.map((el) => {
        return {
          symbol: el.querySelector("td:first-child > a")?.innerHTML,
          name: el.querySelector("td:nth-child(2)")?.innerHTML,
          lastPrice: el.querySelector("td:nth-child(3)")?.innerHTML,
          marketTime: el.querySelector("td:nth-child(4)")?.innerHTML,
          change: el.querySelector("td:nth-child(5) > span")?.innerHTML,
          changePct: el.querySelector("td:nth-child(6) > span")?.innerHTML,
          volume: el.querySelector("td:nth-child(7)")?.innerHTML,
          avgVolume: el.querySelector("td:nth-child(8)")?.innerHTML,
          marketCap: el.querySelector("td:nth-child(9)")?.innerHTML,
        };
      }),
  },
  CRYPTOCURRENCIES: {
    url:
      "https://finance.yahoo.com/cryptocurrencies?offset=<%= offset%>&count=<%= count%>",
    waitForSelector: `table`,
    evalSelector: `tbody > tr`,
    evalCallback: (trs: Element[], type) => {
      const commentRegex = /<\!--.+?-->/gs;

      return trs.map((el) => {
        return {
          type: "CRYPTOCURRENCY",
          symbol: el.querySelector("td:first-child > a")?.innerHTML,
          name: el
            .querySelector("td:nth-child(2)")
            ?.innerHTML.replace(commentRegex, ""),
          price: el.querySelector("td:nth-child(3) > span")?.innerHTML,
          change: el.querySelector("td:nth-child(4) > span")?.innerHTML,
          changePct: el.querySelector("td:nth-child(5) > span")?.innerHTML,
          marketCap: el.querySelector("td:nth-child(6) > span")?.innerHTML,
          volume: el
            .querySelector("td:nth-child(8)")
            ?.innerHTML.replace(commentRegex, ""),
          circulatingSupply: el
            .querySelector("td:nth-child(10)")
            ?.innerHTML.replace(commentRegex, ""),
        };
      });
    },
    pagingCfg: {
      hasNextCallback: (btn: HTMLButtonElement) => !btn.disabled,
      hasNextSelector: `#scr-res-table > div:nth-child(2) > button:nth-child(4)`,
    },
  },
  SYMBOL_HISTORY: {
    url: `https://finance.yahoo.com/quote/<%= symbol %>/history?p=<%= symbol %>`,
    waitForSelector: "#Col1-1-HistoricalDataTable-Proxy",
    evalSelector: "#Col1-1-HistoricalDataTable-Proxy > * tbody > tr",
    evalCallback: (trs: Element[], type) =>
      trs.map((el) => ({
        date: el.querySelector("td:first-child > span")?.innerHTML,
        open: el.querySelector("td:nth-child(2) > span")?.innerHTML,
        high: el.querySelector("td:nth-child(3) > span")?.innerHTML,
        low: el.querySelector("td:nth-child(4) > span")?.innerHTML,
        close: el.querySelector("td:nth-child(5) > span")?.innerHTML,
        volume: el.querySelector("td:nth-child(7) > span")?.innerHTML,
      })),
  },
  SYMBOL_DATA: {
    url: `https://finance.yahoo.com/quote/<%= symbol %>?p=<%= symbol %>`,
    waitForSelector: "#render-target-default",
    evalSelector: "#render-target-default",
    evalCallback: (container: Element[], type: string) => {
      const headerEl = container[0].querySelector("div > * #quote-header-info");
      const quoteEl = container[0].querySelector("div > * #quote-summary");

      return {
        type,
        title: headerEl.querySelector("div:nth-child(2) > * h1")?.innerHTML,
        description: headerEl.querySelector("div:nth-child(2) > * span")
          ?.innerHTML,
        price: headerEl.querySelector(
          "div:nth-child(3) > div:first-child > div > span:first-child"
        )?.innerHTML,
        growth: headerEl.querySelector(
          "div:nth-child(3) > div:first-child > div > span:nth-child(2)"
        )?.innerHTML,
        previousClose: quoteEl.querySelector(
          "div:first-child > * tbody > tr:first-child > td:nth-child(2) > span"
        )?.innerHTML,
        open: quoteEl.querySelector(
          "div:first-child > * tbody > tr:nth-child(2) > td:nth-child(2) > span"
        )?.innerHTML,
        bid: quoteEl.querySelector(
          "div:first-child > * tbody > tr:nth-child(3) > td:nth-child(2) > span"
        )?.innerHTML,
        ask: quoteEl.querySelector(
          "div:first-child > * tbody > tr:nth-child(4) > td:nth-child(2) > span"
        )?.innerHTML,
        dayRange: quoteEl.querySelector(
          "div:first-child > * tbody > tr:nth-child(5) > td:nth-child(2) > span"
        )?.innerHTML,
        volume: quoteEl.querySelector(
          "div:first-child > * tbody > tr:nth-child(7) > td:nth-child(2) > span"
        )?.innerHTML,
        avgVolume: quoteEl.querySelector(
          "div:first-child > * tbody > tr:nth-child(8) > td:nth-child(2) > span"
        )?.innerHTML,
        marketCap: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:first-child > td:nth-child(2) > span"
        )?.innerHTML,
        peRatio: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2) > span"
        )?.innerHTML,
        eps: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > span"
        )?.innerHTML,
        earningsDate: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2) > span"
        )?.innerHTML,
        divAndYield: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2)"
        )?.innerHTML,
        exDividendDate: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:nth-child(7) > td:nth-child(2) > span"
        )?.innerHTML,
        yearTargetEst: quoteEl.querySelector(
          "div:nth-child(2) > table > tbody > tr:nth-child(8) > td:nth-child(2) > span"
        )?.innerHTML,
      };
    },
  },
};
