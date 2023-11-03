import { MongoClient } from "mongodb";
const express = require("express");
const mongoOptions = {};
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const client = new MongoClient(
  "mongodb+srv://guesscareer:DjKy63efHXqkyF0r@guesscareer.vffvlwc.mongodb.net/guesscareer?retryWrites=true&w=majority",
  mongoOptions
);

const clientPromise = client.connect();

async function getSearchResults(query) {
  const mongoClient = await clientPromise;
  console.log(query);
  const count = await mongoClient
    .db("guesscareer2")
    .collection("guesscareer")
    .find({ $text: { $search: query } })
    .limit(5)
    .toArray();

  return count;
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { query } = req?.body;

    const data = await getSearchResults(query);

    res.status(200).json(data);
  }
};

export default handler;
