import dynamic from "next/dynamic";

const Table = dynamic(() => import("./tabel"), {
  ssr: false,
});

export default Table;
