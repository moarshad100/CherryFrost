const connection = require("./config/connection");

const User = require("./models/user");

const express = require("express");

const port = 3001;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  User.find().then((userData) => {
    res.json(userData);
  });
});

connection.once("open", () => {
  app.listen(port, () => {
    console.log("server is running");
  });
});
