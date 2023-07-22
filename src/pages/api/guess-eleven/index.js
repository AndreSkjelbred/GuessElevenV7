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

async function initGuessEleven() {
  const mongoClient = await clientPromise;
  const count = await mongoClient
    .db("guesseleven")
    .collection("finished_guess_eleven")
    .countDocuments();

  const randomIndex = Math.floor(Math.random() * count);
  const randomDocument = await mongoClient
    .db("guesseleven")
    .collection("finished_guess_eleven")
    .find()
    .skip(randomIndex)
    .limit(1)
    .toArray();
  return JSON.parse(JSON.stringify(randomDocument[0]));
}

const handler = async (req, res) => {
  if (req.method === "GET") {
    const data = await initGuessEleven();

    res.status(200).json(data);
  }
};

export default handler;
