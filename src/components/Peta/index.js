import dynamic from "next/dynamic";

const Map = dynamic(() => import("./peta"), {
  ssr: false,
});

export default Map;
