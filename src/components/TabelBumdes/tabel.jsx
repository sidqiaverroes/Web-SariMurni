import React from "react";

function tabel() {
  const dataPJ = [
    {
      number: "1",
      name: "Roni Hendri Koyansow",
      position: "Penasihat",
      desc: "Kepala Desa (ex officio)",
    },
    {
      number: "2",
      name: "Ahmad Ma’arif",
      position: "Ketua Pengawas",
      desc: "Ketua BPD",
    },
    {
      number: "3",
      name: "Khoiril Anam",
      position: "Wakil Ketua Pengawas",
      desc: "Anggota BPD",
    },
    {
      number: "4",
      name: "Agustina Buntu Batu",
      position: "Anggota Pengawas",
      desc: "Sekretaris BPD",
    },
    {
      number: "5",
      name: "Muhammad Syaban Mauluddin ",
      position: "Direktur",
      desc: "Pemuda Desa",
    },
    {
      number: "6",
      name: "Khotibul Umam",
      position: "Sekretaris",
      desc: "Pemuda Desa",
    },
    {
      number: "7",
      name: "Meggy Natali R Lasut ",
      position: "Bendahara",
      desc: "Pemuda Desa",
    },
    {
      number: "8",
      name: "Ruspian Majid ",
      position: "Kepala Unit Usaha",
      desc: "Pemuda Desa",
    },
  ];
  return (
    <table className="min-w-[800px] rounded-lg shadow-lg overflow-hidden">
      <thead>
        <tr className=" bg-c-green text-white">
          <th className="py-2">No</th>
          <th className="py-2">Nama</th>
          <th className="py-2">Kedudukan</th>
          <th className="py-2">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        {dataPJ.map((data, index) => {
          return (
            <tr key={index} className="text-center leading-none">
              <td
                className={`${
                  (index + 1) % 2 == 0 ? "bg-c-gold" : "bg-c-darkgold"
                } text-white p-2`}
              >
                {data.number}
              </td>
              <td
                className={`${
                  (index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-100"
                } p-4`}
              >
                {data.name}
              </td>
              <td
                className={`${
                  (index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-100"
                } p-4`}
              >
                {data.position}
              </td>
              <td
                className={`${
                  (index + 1) % 2 == 0 ? "bg-gray-200" : "bg-gray-100"
                } p-4`}
              >
                {data.desc}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default tabel;
