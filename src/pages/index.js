import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Peta from "@/components/Peta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Peta></Peta>
      <section id="komoditas"></section>
      <section id="berita"></section>
      <section id="Galeri"></section>
      <Footer></Footer>
    </div>
  );
}
