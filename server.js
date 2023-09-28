const connection = require("./config/connection");

const User = require("./models/user");
const Thought = require("./models/thought");

const express = require("express");

const port = 3001;

const app = express();

app.use(express.json());

app.get("/api/user", (req, res) => {
  User.find().then((userData) => {
    res.json(userData);
  });
});

app.get("/api/thoughts", (req, res) => {
  Thought.find().then((thoughtData) => {
    res.json(thoughtData);
  });
});

connection.once("open", () => {
  app.listen(port, () => {
    console.log("server is running");
  });
});
