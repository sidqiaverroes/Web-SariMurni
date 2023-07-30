import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Peta from "@/components/Peta";
import Footer from "@/components/footer";
import Komoditas from "@/components/komoditas";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Peta></Peta>
      <Komoditas></Komoditas>
      <section id="berita"></section>
      <section id="Galeri"></section>
      <Footer></Footer>
    </div>
  );
}
