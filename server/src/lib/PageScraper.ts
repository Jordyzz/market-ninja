import puppeteer from "puppeteer";
import { template } from "lodash";
import { ScrapeConfig, PagedParams } from "../types/scrapeOption.interace";

class PageScraper {
  private browser: puppeteer.Browser;

  static init() {
    return (async function () {
      let pageScraper = new PageScraper();
      await pageScraper.buildBrowser();

      return pageScraper;
    })();
  }

  async buildBrowser() {
    try {
      console.log("Opening the browser......");
      this.browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-setuid-sandbox"],
        ignoreHTTPSErrors: true,
      });
    } catch (err) {
      console.log("Could not create a browser instance => : ", err);
    }
  }

  async scraper(cfg: ScrapeConfig, urlParams?: any) {
    const { url, waitForSelector, evalSelector, evalCallback } = cfg;

    const page = await this.browser.newPage();

    await page.goto(url);
    await page.waitForSelector(waitForSelector);
    const data = await page.$$eval(evalSelector, evalCallback, urlParams?.type);

    page.close();

    return data;
  }

  async paramScraper(cfg: ScrapeConfig, urlParams: any, lazyLoad: boolean) {
    const {
      url,
      waitForSelector,
      evalSelector,
      evalCallback,
      pagingCfg: { hasNextSelector, hasNextCallback } = {},
    } = cfg;
    const page = await this.browser.newPage();
    let data;

    await page.goto(template(url)({ ...urlParams }));

    await page.waitForSelector(waitForSelector);
    lazyLoad && (await this.scrollToBottom(page));
    data = await page.$$eval(evalSelector, evalCallback);

    const response = hasNextSelector
      ? await this.pagedParams(hasNextSelector, hasNextCallback, data, page)
      : data;

    page.close();
    return response;
  }

  async multiPageScraper(cfg: ScrapeConfig, urlParams: any) {
    const { url } = cfg;

    const paramedUrl = template(url)({ ...urlParams });

    return this.scraper({ ...cfg, url: paramedUrl }, urlParams);
  }

  async pagedParams(
    hasNextSelector: string,
    hasNextCallback: (el: Element) => boolean,
    data: any,
    page: puppeteer.Page
  ) {
    const hasNext = await page.$eval(hasNextSelector, hasNextCallback);

    return { hasNext, data };
  }

  async scrollToBottom(page: puppeteer.Page) {
    const distance = 1000;
    const delay = 100;
    while (
      await page.evaluate(
        () =>
          document.scrollingElement.scrollTop + window.innerHeight <
          document.scrollingElement.scrollHeight
      )
    ) {
      await page.evaluate((y) => {
        document.scrollingElement.scrollBy(0, y);
      }, distance);
      await page.waitFor(delay);
    }
  }
}

export const pageScraper = PageScraper.init();
