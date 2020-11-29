interface DataTemplates {
  [key: string]: (el: Element[], type?: string) => any;
}

export const stockDataTemplates: DataTemplates = {
  STOCK: (container, type) => {
    const headerEl = container[0].querySelector("div > * #quote-header-info");
    const quoteEl = container[0].querySelector("div > * #quote-summary");

    return {
      type,
      title: headerEl.querySelector("div:nth-child(2) > * h1").innerHTML,
      description: headerEl.querySelector("div:nth-child(2) > * span")
        .innerHTML,
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
};
