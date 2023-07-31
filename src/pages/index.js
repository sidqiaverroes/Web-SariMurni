import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Peta from "@/components/Peta";
import Footer from "@/components/footer";
import Komoditas from "@/components/komoditas";
import Berita from "@/components/berita";
import Galeri from "@/components/galeri";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Peta></Peta>
      <Komoditas></Komoditas>
      <Berita></Berita>
      <Galeri></Galeri>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}
