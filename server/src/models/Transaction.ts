import mongoose from "mongoose";
import { User } from "./User";

const transactionSchema = new mongoose.Schema({
  symbol: String,
  quantity: Number,
  price: Number,
  timestamp: { type: Date, default: Date.now },
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: User },
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
