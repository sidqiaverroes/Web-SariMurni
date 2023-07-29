import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}
