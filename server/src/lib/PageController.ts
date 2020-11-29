import { scrapeOptions } from "./scrapeOptions";
import { pageScraper } from "./PageScraper";

export const pageController = async (
  type: keyof typeof scrapeOptions,
  urlParams?: any,
  lazyLoad: boolean = false,
  multiPaged: boolean = false
) => {
  const pScraper = await pageScraper;

  const data = multiPaged
    ? await pScraper.multiPageScraper(scrapeOptions[type], urlParams)
    : urlParams
    ? await pScraper.paramScraper(scrapeOptions[type], urlParams, lazyLoad)
    : await pScraper.scraper(scrapeOptions[type]);
  console.log("data: ", data);

  return data;
};
