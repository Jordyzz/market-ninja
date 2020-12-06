import express from "express";
import { json } from "body-parser";
import cors from "cors";
import bcrypt from "bcryptjs";
import { connect } from "mongoose";

import { pageController } from "./lib/PageController";
import { pageScraper } from "./lib/PageScraper";
import { User } from "./models/User";
import { has } from "lodash";
import { Transaction } from "./models/Transaction";

const main = async () => {
  const mongoose = await connect(
    "mongodb+srv://admin:q1w2e3r4@cluster0.vdr1w.mongodb.net/MARKET-NINJA?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const app = express();

  app.use(json());
  app.use(cors());

  app.get("/trending-tickers", async (req, res) => {
    let data;

    try {
      data = await pageController("TRENDING_TICKERS");
    } catch (err) {
      res.status(500).send({ error: "Something went wrong..." });
    }

    res.status(201).send(data);
  });

  app.get("/symbol-history", async (req, res) => {
    const { symbol } = req.query;
    let data;
    try {
      data = await pageController("SYMBOL_HISTORY", { symbol }, true);
    } catch (err) {
      res.status(500).send({ error: "Something went wrong..." });
    }

    res.status(201).send(data);
  });

  app.get("/symbol-data", async (req, res) => {
    const { symbol, type } = req.query;
    let data;

    try {
      data = await pageController("SYMBOL_DATA", { symbol, type }, false, true);
    } catch (err) {
      res.status(500).send({ error: "Something went wrong... " });
    }

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
      res.status(500).send({ error: "Something went wrong.." });
    }

    res.status(201).send(data);
  });

  app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await (
      await User.create({
        email,
        password: hashedPassword,
      })
    ).save();

    res.send(user.id);
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });

    if (!user) {
      res.status(400).send({ error: "Incorrect email" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      res.status(400).send({ error: "Invalid password" });
    }

    res.send({ id: user.id, email: user.email });
  });

  app.get("/transaction", async (req, res) => {
    const { userId } = req.query;

    const transactions = await Transaction.find().where("userId", userId);

    res.send(transactions);
  });

  app.post("/transaction", async (req, res) => {
    const { symbol, price, quantity, userId } = req.body;

    const user = User.findOne(userId);

    if (!user) {
      res.status(400).send({ error: "Not authorized" });
    }

    const transaction = await Transaction.create({
      symbol,
      price,
      quantity,
      userId,
    });

    res.send(transaction.id);
  });

  app.listen(4000, () => console.log("Listening on port 4000!"));
};

main();
