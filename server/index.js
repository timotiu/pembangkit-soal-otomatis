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
    origin: "*", // or '*' for any origin
    optionsSuccessStatus: 200,
  })
);
connect();

app.get("/", (req, res) => {
  res.json("Server sedang berjalan bro...");
});
app.post("/", (req, res) => {
    hasilSoal(
      req.body.inputSoal,
      req.body.jumlahSoal,
      req.body.tipeSoal,
      req.body.tipeMapel,
      async (result) => {
        let arrSoal = [];
        result.forEach((res) => arrSoal.push(res + "#"));
        // async function updateData() {
        //   try {
        //     const conditions = { nomor: req.body.nomor };
        //     console.log(req.body);
        //     const newData = {
        //       tipe: req.body.tipeSoal,
        //       soal: `${arrSoal}`,
        //       nomor: req.body.nomor,
        //     };
        //     // await soal.findOneAndUpdate(conditions, newData, {
        //     //   upsert: true,
        //     //   new: true,
        //     // });
        //     await soal.create(newData);
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }
        // updateData();
        // hasilPilihan(req.body.inputSoal, (result) => {
        //   let arrJawaban = [];
        //   result.forEach((res) => arrJawaban.push(res + "#"));
        //   async function updateData() {
        //     try {
        //       const conditions = { nomor: req.body.nomor };
        //       const newData = {
        //         jawaban: `${arrJawaban}`,
        //         nomor: req.body.nomor,
        //         tipe: req.body.tipeSoal,
        //       };
        //       // await jawaban.findOneAndUpdate(conditions, newData, {
        //       //   upsert: true,
        //       //   new: true,
        //       // });
        //       // await jawaban.updateOne(newData);
        //       await jawaban.create(newData);
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }
        //   updateData();
        // });
        res.json({
          soal: arrSoal,
        });
      }
    );

});


app.listen(port, () => {
  console.log(`Server sedang berjalan di http://localhost:${port}`);
});
