import mongoose from "mongoose";
const soal = mongoose.model("Data_Literasi", {
  nomor: {
    type: Number,
    require: true,
  },
  soal: {
    type: String,
    require: true,
  },
  tipe: {
    type: String,
    require: true,
  },
});
const jawaban = mongoose.model("Data_Jawaban", {
  nomor: {
    type: Number,
    require: true,
  },
  jawaban: {
    type: String,
    require: true,
  },
});
export { soal, jawaban };
