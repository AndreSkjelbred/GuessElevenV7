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

export const getCareerData = async () => {
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
};

export const getSearchResults = async () => {
  const mongoClient = await clientPromise;

  const allDocuments = await mongoClient
    .db("guesscareer2")
    .collection("searchresults")
    .find()

    .toArray();

  return JSON.parse(JSON.stringify(allDocuments));
};

const handler = async (req, res) => {
  if (req.method === "GET") {
    const data = await getCareerData();
    res.status(200).json(data);
  }
};

export default handler;
