import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Peta from "@/components/Peta";
import Footer from "@/components/footer";
import Komoditas from "@/components/komoditas";
import Berita from "@/components/berita";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Peta></Peta>
      <Komoditas></Komoditas>
      <Berita></Berita>
      <section id="Galeri"></section>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}
