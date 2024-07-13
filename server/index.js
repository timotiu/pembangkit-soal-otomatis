import express from "express";
import bodyParser from "body-parser";
import { hasilSoal, hasilPilihan } from "./utils/soal.js";
import { config } from "dotenv";
config();
import { connect } from "./db/inputData.js";
import { soal, jawaban } from "./db/model.js";
import path from "path";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("script.js", "react_js/build")));

const port = 3001;
let nomorArr = [];
app.use(
  cors({
    allowedHeaders: ["Content-Type"],
    origin: '*', // or '*' for any origin
    optionsSuccessStatus: 200,
  })
);
connect();

app.get("/", (req, res) => {
  res.json("Server sedang berjalan bro...");
});
app.post("/", (req, res) => {
  res.send(JSON.stringify(Math.random().toString()));

});

app.listen(port, () => {
  console.log(`Server sedang berjalan di http://localhost:${port}`);
});
