import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <section id="peta"></section>
      <section id="komoditas"></section>
      <section id="berita"></section>
      <section id="Galeri"></section>
      <Footer></Footer>
    </div>
  );
}
