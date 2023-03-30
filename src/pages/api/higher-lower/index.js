import { MongoClient } from "mongodb";
const express = require("express");
const mongoOptions = {};
const app = express();
app.use(express.json());
const client = new MongoClient(
  "mongodb+srv://guesscareer:DjKy63efHXqkyF0r@guesscareer.vffvlwc.mongodb.net/guesscareer?retryWrites=true&w=majority",
  mongoOptions
);

const clientPromise = client.connect();

async function getHigherLowerPlayer() {
  const mongoClient = await clientPromise;
  const count = await mongoClient
    .db("guesscareer2")
    .collection("guesscareer")
    .countDocuments();

  const randomIndex = Math.floor(Math.random() * count);
  const randomDocument = await mongoClient
    .db("guesscareer2")
    .collection("guesscareer")
    .find()
    .skip(randomIndex)
    .limit(1)
    .toArray();
  return JSON.parse(JSON.stringify(randomDocument[0]));
}

const handler = async (req, res) => {
  if (req.method === "GET") {
    const data = await getHigherLowerPlayer();

    res.status(200).json(data);
  }
};

export default handler;
