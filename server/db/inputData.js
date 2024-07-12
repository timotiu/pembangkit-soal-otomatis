import mongoose from "mongoose";
import express from "express";
const app = express();
const connect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Pembangkit_Soal");
};
export { connect };
