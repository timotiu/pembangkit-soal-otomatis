import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";
import readline from "readline";
let key="1sk-tyHvoGQvdu0KWgoONieYE_DFw5hgqC4eKnQGkEMy7MT3BlbkFJm4SISDqWOMfK7l9B00Cf_ohtH-ml7Dt44FalWZe40A76";
key=key.substring(1,key.length-2);
console.log(key);
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: key,
  })
);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

function getSoal(soal) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(soal);
    }, 100);
  });
}

async function hasilSoal(inputSoal, jumlahSoal, tipeSoal, tipeMapel, callback) {
  let soal = `Buatlah tipe ${tipeSoal}, untuk membuat ${jumlahSoal} soal pilihan ganda mata pelajaran ${tipeMapel} beserta kunci jawabannya  guna menguji siswa dalam "${inputSoal}"`;
  console.log(soal);
  const response = await openAi.createChatCompletion({
    model: "gpt-4-turbo",
    messages: [{ role: "user", content: soal }],
  });
  soal = response.data.choices[0].message.content;
  soal = soal.split("\n");
  callback(soal);
  return soal;
}

const hasilPilihan = async (soal, callback) => {
  const answer = await openAi.createChatCompletion({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: `Dengan menampilkan pertanyaan lebih dulu,lalu di bawahnya buat satu pilihan ganda dengan pilihan A sampai D dari pertanyaan ${soal}, lalu sertakan kunci jawaban yang benar dengan menggunakan titik dua`,
      },
    ],
  });
  let jawaban = answer.data.choices[0].message.content;
  jawaban = jawaban.split("\n");
  callback(jawaban);
};
async function koreksiJawaban(soal, jawaban, callback) {
  const koreksi = await openAi.createChatCompletion({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: `Jawab tanpa penjelasan, apakah benar atau salah, soal "${soal}" jawabannya adalah "${jawaban}"?`,
      },
    ],
  });
  let hasil = koreksi.data.choices[0].message.content;
  callback(hasil);
}
userInterface.prompt();
export { hasilSoal, hasilPilihan, koreksiJawaban };
