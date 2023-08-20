import dynamic from "next/dynamic";

const ArticleCard = dynamic(() => import("./artikelCard"), {
  ssr: false,
});

export default ArticleCard;
