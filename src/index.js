import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the best CRUD API implemented using redis 😎😎😎");
});

const port = process.env.PORT;

app.listen(port, () => console.log("Server up and running"));
