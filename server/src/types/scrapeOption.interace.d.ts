export interface ScrapeConfig {
  url: string;
  waitForSelector: string;
  evalSelector: string;
  evalCallback: (el: Element | Element[], type?: string) => any;
  pagingCfg?: PagingConfig;
}

export interface ScrapeOptions {
  [key: string]: ScrapeConfig;
}

export interface PagingConfig {
  hasNextSelector: string;
  hasNextCallback: (el: Element) => boolean;
}

export interface PagedParams {
  count: string | number;
  offset: string | number;
}
