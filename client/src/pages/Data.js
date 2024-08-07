import axios from "axios";
import { useEffect, useState } from "react";

export const Data = () => {
  const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState([]);
  const [nomorPaket, setNomorPaket] = useState(0);

  let paketSoal = [];
  let paketJawaban = [];
  let paketJawaban2 = [];
  let kunciJawaban = [];

  useEffect(() => {
    async function getData() {
      const datas = await axios.get("http://localhost:3001/dataSoalJawaban");
      console.log(datas);
      let dataSoal = datas.data.soals;
      setSoal(dataSoal);
      setJawaban(dataSoal);
    }
    getData();
  }, []);
  const hasilSoal = soal.map((soal) => soal.soal.split("#"));
  console.log(hasilSoal);
  // if(soal.length>0){
  //     for(let i=1;i<soal.length+1;i++){
  //     soal.forEach(soal=>{
  //         if(soal.nomor==i){
  //             paketSoal.push(soal.soal.split('#'));
  //         }
  //     })
  // }
  // }

  // if(jawaban.length>0){
  //     for(let i=1;i<jawaban.length+1;i++){
  //         jawaban.forEach(jawaban=>{
  //             if(jawaban.nomor==i){
  //                 paketJawaban.push(jawaban.jawaban.split('#'));
  //             }
  //         })
  //         }
  //     }

  // paketJawaban.forEach((jawaban,i)=>{
  //     kunciJawaban.push(jawaban[jawaban.length-2]);
  //     if(jawaban.length==8){
  //         paketJawaban2.push([
  //             jawaban[1].substring(1),
  //             jawaban[2].substring(1),
  //             jawaban[3].substring(1),
  //             jawaban[4].substring(1)]
  //             )
  //         }
  //     else if(jawaban.length==9){
  //         paketJawaban2.push([
  //             jawaban[2].substring(1),
  //             jawaban[3].substring(1),
  //             jawaban[4].substring(1),
  //             jawaban[5].substring(1)]
  //             )
  //     }
  //     else{
  //         paketJawaban2.push([
  //             jawaban[3].substring(1),
  //             jawaban[4].substring(1),
  //             jawaban[5].substring(1),
  //             jawaban[6].substring(1)]
  //             )
  //     }
  // })

  return (
    <>
      <div className="w-full flex flex-col gap-1 pl-3">
        <h1 className="mb-3 mt-3 text-3xl font-bold italic rounded-full w-96 text-center">
          Data Soal dan Jawaban
        </h1>
        {/* <select name="" className="mb-3 w-28" id="" onChange={pilihPaket}>
            <option value="0" selected>Pilih Paket</option>
            <option value="0">Paket 1</option>
            <option value="1">Paket 2</option>
            <option value="2">Paket 3</option>
            <option value="3">Paket 4</option>
            <option value="4">Paket 5</option>
        </select> */}
        {/* {paketSoal.map((soal,i)=>(
            <div key={i} className="mb-4 ml-3">
                <p>{`${i+1}. ${soal[nomorPaket].substring(3)}`}</p>
            {paketJawaban2[i].map(jawaban=>(
                <p>{jawaban}</p>
                ))}
                <p>Kunci Jawaban : {kunciJawaban[i]}</p>
                </div>
        ))} */}
        {hasilSoal.map((soal, i) => (
          <div className="mb-4 flex gap-2">
            <span>{i + 1+"."}</span>
            <span>
              {soal.map((s, i) => (
                <p>
                  {i == 1 && soal[i].substring(1)}
                  <p>{i > 1 && soal[i].substring(1)}</p>
                </p>
              ))}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
