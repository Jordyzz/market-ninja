import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { pageController } from "./lib/PageController";
import { pageScraper } from "./lib/PageScraper";

const app = express();

app.use(json());
app.use(cors());

app.get("/trending-tickers", async (req, res) => {
  const data = await pageController("TRENDING_TICKERS");

  res.status(201).send(data);
});

app.get("/symbol-history", async (req, res) => {
  const { symbol } = req.query;
  const data = await pageController("SYMBOL_HISTORY", { symbol }, true);

  res.status(201).send(data);
});

app.get("/symbol-data", async (req, res) => {
  const { symbol, type } = req.query;
  const data = await pageController(
    "SYMBOL_DATA",
    { symbol, type },
    false,
    true
  );

  res.status(201).send(data);
});

app.get("/cryptocurrencies", async (req, res) => {
  const { count = 25, offset = 0 } = req.query;
  let data;
  try {
    data = await pageController("CRYPTOCURRENCIES", {
      count: count as string | number,
      offset: offset as string | number,
    });
  } catch (err) {
    res.send(501).send({ error: "Something went wrong.." });
  }

  res.status(201).send(data);
});

app.listen(4000, () => console.log("Listening on port 4000!"));
